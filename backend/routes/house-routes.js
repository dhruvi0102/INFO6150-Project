const express = require('express');
const { check } = require('express-validator');

const houseControllers = require('../controllers/house-controllers');
const fileUpload = require('../middleware/file-upload');
const router = express.Router();

// Add new house route
router.post('/',
    // fileUpload.single('image'),
    [
        check('title', 'Please enter a valid title').not().isEmpty().trim(),
        check('description', 'Please enter a valid description').not().isEmpty().trim(),
        check('location', 'Please enter a valid location').not().isEmpty().trim(),
        check('pricePerNight', 'Please enter a valid price per night').not().isEmpty().isNumeric().trim().isFloat({ gt: 0 }),
        check('capacity', 'Please enter a valid capacity').not().isEmpty().isNumeric().trim().isInt({ gt: 0 }),
        check('image', 'Please upload an image').not().isEmpty().trim(),
    ],
    houseControllers.postHouse
);

// Get all houses
router.get('/', houseControllers.getAllHouses);

// Get house by Id
router.get('/:id', houseControllers.getHouseById);

// Get top-rated houses
router.get('/top-rated', houseControllers.getTopRatedHouses);

// Search houses by location
router.get('/search/:location', houseControllers.searchHousesByLocation);

module.exports = router;
