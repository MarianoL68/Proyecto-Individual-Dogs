const express = require('express');
const router = express.Router();
const {getAllDogsHandler} = require('../handlers/dogsHandler');
const {getByIdHandler} = require('../handlers/dogsHandler');
const {postDogHandler} = require('../handlers/dogsHandler');

router.get('/', getAllDogsHandler)

router.get('/:idRaza', getByIdHandler);

router.post('/', postDogHandler);

module.exports = router;