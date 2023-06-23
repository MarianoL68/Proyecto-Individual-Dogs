let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character);

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    const charactersFiltered = myFavorites.filter((favorite) => favorite.id !== +id);

    res.status(200).json(charactersFiltered);
}

module.exports ={
    postFav,
    deleteFav
}