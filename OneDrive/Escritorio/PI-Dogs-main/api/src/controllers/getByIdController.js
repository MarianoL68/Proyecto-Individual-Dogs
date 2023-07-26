const {getAllDogs} = require('./getAllDogsController');

const getById = async (idRaza) => {
    try {
        const AllData = await getAllDogs(); // Obtenemos todos los perros utilizando el controlador getAllDogs

         // Filtramos los perros para encontrar el que coincide con el ID especificado
        const dog = AllData.filter((d) => d.id.toString() === idRaza.toString())
        return dog;
    
    } catch (error) {

       return error.message;
   
    }

}

module.exports= {getById}