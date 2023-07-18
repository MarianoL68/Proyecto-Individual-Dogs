const express = require('express');
const router = express.Router();
const {getTemperaments} = require('../controllers/temperamentsControllers');

router.get("/", async(req, res)=>{
    try {
     const temperament = await getTemperaments();
     return res.status(200).json(temperament);
 
    } catch (error) {
     return res.status(404).send(error.message)
    } 
 });

module.exports = router;