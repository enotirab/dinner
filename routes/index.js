const express = require('express');
const router = express.Router();
const todoController = require('../controllers/restaurantController');

/* GET home page. */
router.get('/', todoController.view);

router.get('/add', todoController.viewAddForm);
router.post('/add', todoController.addNewRestaurant);

router.get('/edit/:id', todoController.viewEditForm);
router.post('/edit/:id', todoController.updateRestaurant);

router.get('/delete/:id', todoController.deleteRestaurant);

module.exports = router;
