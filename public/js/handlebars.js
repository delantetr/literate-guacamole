const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set up Handlebars as the template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Set the path to your CSS and JS files
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

// Register the partials
app.get('/', (req, res) => {
    res.render('layout', {
        header: 'header',
        body: 'body',
        footer: 'footer',
        partials: {
            signupModal: 'signupModal',
            loginModal: 'loginModal',
        },
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
