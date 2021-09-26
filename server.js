const express = require('express');
const app = express();
const port= 3000;
const pokemon = require('./models/pokemon.js');

////////.................
// MIDDLEWARE
/////////////////////////
app.use(express.static("public"))

/////////////////////////
// ROUTES
/////////////////////////

// INDEX
app.get('/pokemons', (req, res) => {
    res.render('index.ejs', { data: pokemon });
});

// SHOW
app.get('/pokemons/:id', (req, res) => {
    res.render('show.ejs', { pokeData: pokemon[req.params.id] });
});


app.listen(port)