import React from "react";
import ReactDOM from "react-dom";
import {receiveAllPokemon} from "./actions/pokemon_actions";
import fetchAllPokemon from "../frontend/util/api_util";
import configureStore from "./store/store";
import {requestAllPokemon} from "./actions/pokemon_actions";
import {selectAllPokemon} from "./reducers/selectors";
import Root from "./components/Root";

document.addEventListener("DOMContentLoaded",()=>{
  const rootEl = document.getElementById('root');
  const store = configureStore();
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store} />, rootEl);
  
});
