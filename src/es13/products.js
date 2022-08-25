import fetch from "node-fetch";

const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
const products = await response.json();

export { products };
