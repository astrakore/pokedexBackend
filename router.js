const router = require("express").Router();

const PokemonRouter = require("./views/PokemonRouter");

router.use("/pokemon", PokemonRouter);

module.exports = router;