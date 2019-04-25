import React from "react"

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let pokemonArr = this.props.pokemon;
    return(
      <ul>
        pokemonArr.map(el=>{
          <li>{el.name}, <img src="{el.img_url}" alt="{el.name}"/> </li>
        })
      </ul>
    )
  }
}

export {PokemonIndex}