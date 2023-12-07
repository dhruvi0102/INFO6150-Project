const express = require('express');
const { check } = require('express-validator');

const rentalControllers = require('../controllers/rentals-controllers');
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
    rentalControllers.postRental
);

// Get all rentals
router.get('/', rentalControllers.getAllRentals);

// Get rental by Id
router.get('/:id', rentalControllers.getRentalById);

// Get top-rated rentals
router.get('/top-rated', rentalControllers.getTopRatedRentals);

// Search rentals by location
router.get('/search/:location', rentalControllers.searchRentalsByLocation);

module.exports = router;
