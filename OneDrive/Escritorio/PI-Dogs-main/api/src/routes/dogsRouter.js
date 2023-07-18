const express = require('express');
const router = express.Router();
const {getAllDogs} = require('../controllers/getAllDogs');
const {getById} = require('../controllers/getById')
const {getByName} = require('../controllers/getByName')
const {postCreateDog} = require('../controllers/postCreateDog')

router.get('/', async (req, res) => {
    try {
        const {name} = req.query;
        const data = await getAllDogs(name);
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(404).send(error.message);
    }
    
})

router.get('/:idRaza', async (req,res) => {
    try {
         const {idRaza} = req.params;
         const dog = await getById(idRaza);

         return res.status(200).json(dog)

    } catch (error) {
        return res.status(404).send(error.message);
    }
});

// router.get('/?name=', async(req, res) => {
//     try {
//         const {name} = req.query;
//         const dogName = await getByName(name);
//         return res.status(200).json(dogName)
        
//     } catch (error) {
//         return res.status(404).send(error.message);
        
//     }
// })

router.post('/', async (req, res) => {
    try {
      const { name, heightMin, heightMax,  weightMin, weightMax, lifeSpan, temperaments} = req.body;
      if (!name || !heightMin || !heightMax || !weightMin || !weightMax || !lifeSpan || !temperaments) {
        return res.status(400).send("Faltan campos obligatorios en la solicitud");
      }
  
      const newDog = await postCreateDog(req.body);
      return res.status(200).json(newDog);

    } catch (error) {
      return res.status(404).send(error.message);
    }
  });

module.exports = router;