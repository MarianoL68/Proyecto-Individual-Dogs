const {Dog, Temperament} = require('../db');
const axios = require('axios');
const apiKey = process.env.API_KEY;

const dbDogs = async () => {
    try {
       // Obtener los perros de la base de datos, incluyendo los temperamentos asociados 
        const dogs = await Dog.findAll({include:{
            model: Temperament,
            attributes: ["name"], //incluir solo el atributo name de la tabla Temperament
            throught: {
                attributes: [], //para excluir los atributos de la tabla intermedia 
            },
        },
    });
       // Formateo los datos obtenidos de la base de datos
       const dbFormated = dogs.map(dog => {
        if(!dog.image){ // Asignar una imagen predeterminada si no hay imagen para el perro
          dog.image = "https://dogemuchwow.com/wp-content/uploads/2016/05/the-doge-favicon-blue.png";
        }

      // Mapeo los temperamentos asociados y los convierto en una cadena separada por comas
      const temperamentsMap = dog.temperaments.map(temp => temp.name);
      const converseTemps = Array.isArray(temperamentsMap)
      ? temperamentsMap.join(', ')
      : temperamentsMap;

      return{
        name: dog.name,
        id: dog.id,
        image: dog.image,
        heightMin: dog.heightMin,
				heightMax: dogs.heightMax,
				weightMin: dog.weightMin,
				weightMax: dog.weightMax,
        lifeSpan: dog.lifeSpan,
				bredFor: dog.bredFor,
        temperament: converseTemps,
        created: dog.created,
      }

       })

       return dbFormated;

      } catch(error) {
        console.error("DataBase Error:", error.message)
        throw new Error(error.message)
      }

    }

const getApiDogs = async () => {
    try {
      // Obtener los perros de la API externa
      const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);

    // Formateo los datos obtenidos de la API
		return await data.map((d) => {
      //separar los valores mínimo y máximo de peso y altura
			let [weightMin, weightMax] = d.weight.metric.split("-")
			let [heightMin, heightMax] = d.height.metric.split("-")
			let temperament = d.hasOwnProperty("temperament")
				? d.temperament
				: ""
			dogApi = {
				id: d.id,
				name: d.name,
				weightMin: Number(weightMin),
				weightMax: Number(weightMax),
				heightMin: Number(heightMin),
				heightMax: Number(heightMax),
				temperament: temperament,
				lifeSpan: d.life_span,
				bredFor: d.bred_for,
				image: d.image.url,
       
			
			}
			return dogApi;
		})
  
    } catch (error) {
       throw new Error('getApiDogs Error');
    }
}

  const getAllDogs = async (name) => {
    try {
       // Obtener los perros de la base de datos y de la API
        const callDb =  await dbDogs();
        const callApi = await getApiDogs();
        const allData = [...callApi, ...callDb]; // Combino los resultados en un único array

        // Se ordenan los perros alfabéticamente por nombre en orden ascendente
        allData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
        // Filtrar los perros cuyo nombre coincide con el valor proporcionado
        return name ? allData.filter((d)=> {return d.name.toLowerCase().search(name.toLowerCase()) >=0 }): allData
       
        
    } catch (error) {
        throw new Error('No existe el perro')
        
    }
  }
  
    module.exports = {
      getAllDogs,
      dbDogs,
      getApiDogs,
    }