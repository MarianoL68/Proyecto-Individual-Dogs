const {getAllDogs} = require('./getAllDogs')

const getByName = async (name) => {
    try {
        const AllData = await getAllDogs(name.id);

        const dog = AllData.filter((d) => d.name === name);
        return dog;
    
    } catch (error) {
       return error.message;
   
    }
}

module.exports = { getByName };