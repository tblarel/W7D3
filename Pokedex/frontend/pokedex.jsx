import React from "react";
import ReactDOM from "react-dom";
import {receiveAllPokemon} from "./actions/pokemon_actions";
import fetchAllPokemon from "../frontend/util/api_util";

document.addEventListener("DOMContentLoaded",()=>{
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>gosh damn I feel amazin</h1>,rootEl);
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
});
