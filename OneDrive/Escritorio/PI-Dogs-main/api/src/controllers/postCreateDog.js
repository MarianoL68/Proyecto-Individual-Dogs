const {Dog, Temperament} = require ('../db');

const postCreateDog = async (data) => {
  try {
    const { name, image, weightMin, weightMax, heightMin, heightMax, lifeSpan, temperaments } = data;

    let newDog = await Dog.create({
      name,
      image,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      lifeSpan,
      temperaments,
    });

    if (temperaments && temperaments.length > 0) {
      for (let i = 0; i < temperaments.length; i++) {
        const [existingTemp] = await Temperament.findOrCreate({ where: { name: temperaments[i] } });
        await newDog.addTemperament(existingTemp);
      }
    }
    await newDog.reload({ include: Temperament });

    return newDog;

  } catch (error) {
    throw new Error(error.message);
  }
};

    module.exports = {postCreateDog}