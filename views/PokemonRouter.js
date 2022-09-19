const express = require("express");
const router = express.Router();

const PokemonController = require("../controllers/PokemonController");

// CRUD RESTful

// Leer todos los pokémon
router.get("/", PokemonController.traePokemon);
// http://localhost:3000/pokemon

// Leer todos los tipos
router.get("/types", PokemonController.traeTipos);
// http://localhost:3000/pokemon/type

module.exports = router;