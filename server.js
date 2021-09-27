const express = require('express');
const app = express();
const port= 3000;
const pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');

////////.................
// MIDDLEWARE
/////////////////////////
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));


/////////////////////////
// ROUTES
/////////////////////////

// INDEX
app.get('/pokemons', (req, res) => {
    res.render('index.ejs', { data: pokemon });
});

// NEW
app.get('/pokemons/new', (req, res)=>{
    res.render('new.ejs');
})

// DESTROY
app.delete('/pokemons/:id', (req, res)=>{
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemons/')
})

// CREATE
app.post('/pokemons', (req, res)=>{
    const newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed,
        }
    };
    pokemon.push(newPokemon);
    res.redirect('/pokemons/')
})

// SHOW
app.get('/pokemons/:id', (req, res) => {
    res.render('show.ejs', { index: req.params.id, pokeData: pokemon[req.params.id] });
});


app.listen(port)