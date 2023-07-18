const {Dog, Temperament} = require('../db');
const axios = require('axios');
const apiKey = process.env.API_KEY;

const dbDogs = async () => {
    try {
        const dogs = await Dog.findAll({include:{
            model: Temperament,
            attributes: ["name"],
            throught: {
                attributes: [],
            },
        },
    });

       const dbFormated = dogs.map(dog => {
        if(!dog.image){
          dog.image = "https://dogemuchwow.com/wp-content/uploads/2016/05/the-doge-favicon-blue.png";
        }

      const temperamentsMap = dog.temperaments.map(temp => temp.name);
      const converseTemps = Array.isArray(temperamentsMap)
      ? temperamentsMap.join(', ')
      : temperamentsMap;

      return{
        id: dog.id,
				name: dog.name,
				weightMin: dog.weightMin,
				weightMax: dog.weightMax,
				heightMin: dog.heightMin,
				heightMax: dogs.heightMax,
				temperament: converseTemps,
				lifeSpan: dog.lifeSpan,
				bredFor: dog.bredFor,
				image: dog.image,
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
      const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);

		return await data.map((d) => {
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
        const callDb =  await dbDogs();
        const callApi = await getApiDogs();
        const allData = [...callApi, ...callDb];

        allData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
        return name ? allData.filter((d)=> {return d.name.toLowerCase().search(name.toLowerCase()) >=0 }): allData
       // return allData;
        
    } catch (error) {
        throw new Error('No existe el perro')
        
    }
  }
  
    module.exports = {
      getAllDogs,
      dbDogs,
      getApiDogs,
    }