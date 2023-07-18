const { Dog} = require('../models/Dog');
const {Temperament} = require('../models/Temperaments');
const axios = require('axios');
const apiKey = process.env.API_KEY;

const getDogByRaza = async (req, res) => {
  try {
    const { idRaza } = req.params;

    // Buscar los datos en la base de datos
    const dbData = await Dog.findByPk(idRaza, {
      include: [Temperament],
    });

    // Si los datos no existen en la base de datos, buscar en la API
    if (!dbData) {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}?api_key=${apiKey}`);
      const apiData = response.data;

      // Insertar los datos en la base de datos utilizando bulkCreate
      await Dog.bulkCreate([apiData], { include: [Temperament] });
    }

    // Volver a buscar los datos en la base de datos
    const dogData = await Dog.findByPk(idRaza, {
      include: [Temperament],
    });

    if (dogData) {
      return res.status(200).json(dogData);
    } else {
      throw new Error('Raza no encontrada');
    }
  } catch (error) {
    res.status(404).send(`Hubo un error al obtener el detalle de la raza: ${error.message}`);
  }
};

module.exports = {
  getDogByRaza,
};