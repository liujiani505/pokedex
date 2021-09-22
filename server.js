const express = require('express');
const app = express();
const port= 3000;
const pokemons = require('./models/pokemon.js');

////////.................
// MIDDLEWARE
/////////////////////////


/////////////////////////
// ROUTES
/////////////////////////


// INDEX
app.get('/pokemons', (req, res) => {
res.render('index.ejs', { data: pokemons });
});

// SHOW
app.get('/pokemons:id', (req, res) => {
res.render('show.ejs', { data: pokemons[req.params.id] });
});


app.listen(port)