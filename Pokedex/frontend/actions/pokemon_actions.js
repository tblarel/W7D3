const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";


const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export {receiveAllPokemon, RECEIVE_ALL_POKEMON};
