const {Restaurant} = require('../models');

const restaurantCategories = [
    'Italian',
    'Mexican', //check about PCness
    'Fast Food',
    'Indian',
];

module.exports.view = async (req, res) => {

    const restaurants = await Restaurant.findAll();
    console.log(restaurants);

    res.render('index', {restaurants});
}


module.exports.viewAddForm = async (req, res) => {

    const restaurant = await Restaurant.findByPk(req.params.id);

    res.render('add', {restaurant, restaurantCategories});
}

module.exports.addNewRestaurant = async (req, res) => {

    await Restaurant.create(
        {
            name: req.body.name,
            description: req.body.description,
            stars: req.body.stars,
            category: req.body.category,
            image_url: req.body.image_url
        },
    );

    res.redirect('/');
}

module.exports.viewEditForm = async (req, res) => {

    const restaurant = await Restaurant.findByPk(req.params.id);

    res.render('edit', {restaurant, restaurantCategories});
}


module.exports.updateRestaurant = async (req, res) => {

    const restaurant = await Restaurant.update(
        {
            name: req.body.name,
            description: req.body.description,
            stars: req.body.stars,
            category: req.body.category,
            image_url: req.body.image_url
        },
        {
            where: {
                id: req.params.id
            }
        }
    );

    res.redirect('/');

}

module.exports.deleteRestaurant = async (req, res) => {

    await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    });


    res.redirect('/');
}
