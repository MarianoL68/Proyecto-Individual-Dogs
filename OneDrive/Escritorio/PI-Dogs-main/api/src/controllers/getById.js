const {Dog, Temperament} = require('../db');
const axios = require('axios');
const apiKey = process.env.API_KEY;
const {getAllDogs} = require('./getAllDogs');

const getById = async (idRaza) => {
    try {
        const AllData = await getAllDogs();

        const dog = AllData.filter((d) => d.id.toString() === idRaza.toString())
        return dog;
    
    } catch (error) {

       return error.message;
   
    }

}

module.exports= {getById}