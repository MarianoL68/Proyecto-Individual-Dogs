const axios = require('axios');
const { Temperament } = require('../db');
const apiKey = process.env.API_KEY;

const getTemperaments = async (req, res) => {
    try {
      // Verificar si los temperamentos ya están almacenados en la base de datos
      const temperamentsEnAlmacen = await Temperament.findAll({
        attributes: ['name']
      });
  
      if (temperamentsEnAlmacen.length) {
        return temperamentsEnAlmacen.map(temp => temp.name);
      }
      else{
        const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);
        const temperaments = [];
        data.forEach(d => {
          if(d.temperament) {
              const splitTemperaments = d.temperament.split(',').map(t => t.trim())
  
              temperaments.push(...splitTemperaments);
          }
        });      
  
        const extraerTemperaments = new Set(temperaments);
        const temperamentsArray = [...extraerTemperaments].sort();
       const bulk = temperamentsArray.map(temp => ({
            name: temp
        }))
        
        const temperamentsAdd = await Temperament.bulkCreate(bulk);
  
        return temperamentsAdd.map(t => t.name)
      }

    } catch (error) {
      throw new Error('Error del servidor');
    }
  };

  module.exports = {
    getTemperaments,
  };