const express = require('express'),
    router = express.Router(),
    restaruantModel = require('../models/restaruantModel');

router.get('/', async (req, res) => {
    let restaruantData = [];
    restaruantData = await restaruantModel.getRandom();


    res.render ('template', {
        locals: {
            title: 'Restaruants',
            dataArray: restaruantData
        },
        partials : {
            partial: 'partial-index'
        }
    });
});

module.exports = router;