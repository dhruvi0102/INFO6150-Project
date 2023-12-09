const express = require('express');
const { check } = require('express-validator');

const rentalsControllers = require('../controllers/rentals-controllers');
const fileUpload = require('../middleware/file-upload');
const router = express.Router();

// Add new rental route
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
    rentalsControllers.postRental
);

//Get all rental
router.get('/', rentalsControllers.getAllRentals);
//Get by Id
router.get('/:id', rentalsControllers.getRentalById);
//Offers rentals - landing page top rentals
router.get('/offers/rentals', rentalsControllers.getOfferRentals);
//Sort by Name/Model
router.get('/sort/:name', rentalsControllers.getRentalByName);

module.exports = router;
