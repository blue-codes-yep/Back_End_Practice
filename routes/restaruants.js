const express = require('express'),
    router = express.Router()
    restaruantModel = require('../models/restaruantModel');

router.get('/:id?', async (req, res) => {
    const { id } = req.params;
    let restaruantData = [];

    if (!!id) {
        restaruantData = await restaruantModel.getById(id);
    } else {
        restaruantData = await restaruantModel.getAll();
    };

    res.render ('template', {
        locals: {
            title: 'Resetaruants',
            dataArray: restaruantData
        },
        partials : {
            partial: 'partial-index'
        }
    });
});

module.exports = router;