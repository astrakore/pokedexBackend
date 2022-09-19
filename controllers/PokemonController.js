const { default: axios } = require("axios")

const PokemonController = {};

// Funciones del controlador

PokemonController.traePokemon = async (req, res) => {

    try {

        let resultados = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=898");

        res.send(resultados.data);

    } catch (error) {

        console.log(error);

    }

};

PokemonController.traeTipos = async (req, res) => {

    try {

        let resultados = await axios.get("https://pokeapi.co/api/v2/type")

        res.send(resultados.data.results);

    } catch (error) {

        console.log(error);

    }

}

module.exports = PokemonController;