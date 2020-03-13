const express = require('express');

const tourControllers = require('./../controllers/tours');

const router = express.Router();

router.route('/').get(tourControllers.getTours);

// CHAINING METHODS FOR ENDPOINTS IN THE SAME ROUTE:
// router
//   .route('/')
//   .get(tourControllers.getTours)
//   .post(authController.protect, tourControllers.createTour)
//   .patch(authController.protect, tourControllers.editTour); 

// THE EXAMPLE ABOVE TAKES ADVANTAGE OF EXPRESS MIDDLEWARE FEATURE 
// THE protect CONTROLLER FUNCTION ENSURES THE USER IS BOTH AUTHENTICATED AND 
// AUTHORIZED TO PERFORM THE OPERATION

module.exports = router;
