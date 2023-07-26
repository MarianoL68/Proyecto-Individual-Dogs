const {getAllDogs} = require ('../controllers/getAllDogsController');
const {getById} = require ('../controllers/getByIdController');
const {postDog} = require ('../controllers/postDogController')

const getAllDogsHandler = async (req, res) => {
    try {
        const {name} = req.query;
        const data = await getAllDogs(name);
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(404).send(error.message);
    }
    
};

const getByIdHandler = async (req,res) => {
    try {
         const {idRaza} = req.params;
         const dog = await getById(idRaza);

         return res.status(200).json(dog)

    } catch (error) {
        return res.status(404).send(error.message);
    }
};

const postDogHandler = async (req, res) => {
    try {
      const { name, heightMin, heightMax,  weightMin, weightMax, lifeSpan, temperaments, created} = req.body;
      if (!name || !heightMin || !heightMax || !weightMin || !weightMax || !lifeSpan || !temperaments || !created) {
        return res.status(400).send("Faltan campos obligatorios en la solicitud");
      }
  
      const newDog = await postDog(req.body);
      return res.status(200).json(newDog);

    } catch (error) {
      return res.status(404).send(error.message);
    }
  };

module.exports = {
    getAllDogsHandler,
    getByIdHandler,
    postDogHandler
}