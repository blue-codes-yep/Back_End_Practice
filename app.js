const express = require('express'),
    app = express(),
    es6Renderer = require('express-es6-template-engine'),
    rootController = require('./routes/restaruants');
    allRestaruantsController = require('./routes/allTheRestaruants');

app.engine('html', es6Renderer);
app.set('views','views');
app.set('view engine', 'html');

app.listen(9000, () => {
    console.log('Power level over 9000');
});

app.use('/', rootController);
app.use('/all', allRestaruantsController);