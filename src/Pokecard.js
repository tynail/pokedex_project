import React , {Component} from 'react'; 
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// method to divide
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
class Pokecard extends Component {
    render(){
        let srcImg = `${POKE_API}${padToThree(this.props.id)}.png`;
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={srcImg} alt={this.props.name}/>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Experience: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;