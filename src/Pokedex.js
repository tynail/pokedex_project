import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'
 
class Pokedex extends Component {
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">£ Winning hands ¢</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing hand!</h1>
        }
        return(
            <div className="Pokedex">
                {title}
                <h2>Total experience: {this.props.exp}</h2>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>    
                    ))}
                </div> 
            </div>  
        ) 
    }
}

export default Pokedex;