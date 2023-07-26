const {Dog, Temperament} = require ('../db');

const postDog = async (data) => {
  try {
    const { name, image, heightMin, heightMax, weightMin, weightMax, lifeSpan, temperaments, created } = data;

     // Se crea un nuevo perro en la base de datos
    let newDog = await Dog.create({
      name,
      image,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      lifeSpan,
      temperaments,
      created,
    });

    // Si se especificaron temperamentos para el perro y hay al menos uno
    if (temperaments && temperaments.length > 0) {
      // Se itera sobre cada temperamento especificado
      for (let i = 0; i < temperaments.length; i++) {
        // Se busca o crea el temperamento en la base de datos
        const [existingTemp] = await Temperament.findOrCreate({ where: { name: temperaments[i] } });
        await newDog.addTemperament(existingTemp);
      }
    }
    // Se recarga el perro con los temperamentos asociados para asegurar de que se reflejen correctamente
    await newDog.reload({ include: Temperament });

    return newDog;

  } catch (error) {
    throw new Error(error.message);
  }
};

    module.exports = {postDog}