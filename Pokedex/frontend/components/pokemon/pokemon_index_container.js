import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import {PokemonIndex} from '../pokemon/pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  errors: state.errors    
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon)  // dispatch requestAllPokemon action.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);