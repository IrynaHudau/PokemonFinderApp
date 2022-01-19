import React,{ Component } from 'react';
import PokemonCard from '../pages/PokemonCard';
import axios from 'axios';

class BuildPokemonCard  extends Component{
    constructor(props){
        super(props);
        this.state = {
            descriptOpen : false,
            pokemon: null,               
        };   
    }

    componentDidMount(){
        let pokemonName = this.props.match.params.name;
        axios.get(`/api/v2/pokemon/${pokemonName}`, 
            {
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
            })
            .then(response => {
                let pokemonData = {
                    id: response.data.id,
                    name: response.data.name,
                    height: response.data.height,
                    weight: response.data.weight,
                    types: response.data.types,
                    abilities: response.data.abilities,
                    experience: response.data.experience,
                    location: response.data.location,
                    moves: response.data.moves,
                    stats: response.data.stats,
                    img: response.data.img,
                    past_types: response.data.past_types,
                }
                this.setState({pokemon: pokemonData});
                // console.log("Data", this.props.pokemon);
            })
            .catch(error => {
                    console.log(error);
                });
        console.log("componentDidMount");
       
    };

    handleDescriptionExpanded = () => {
        this.setState({descriptOpen: !this.state.descriptOpen});
    };

    render(){
        //const pokemonName = this.props.history.location.pathname;
        console.log("Result",this.state.pokemon);
        if(this.state.pokemon !== null){
            return(
                <div>
                    <PokemonCard 
                    pokemon={this.state.pokemon}
                    name={this.state.pokemon.name}
                    id = {this.state.pokemon.id}
                    height = {this.state.pokemon.height}
                    weight = {this.state.pokemon.weight}
                    types = {this.state.pokemon.types}
                    abilities = {this.state.pokemon.abilities}
                    location = {this.state.pokemon.location}
                    // imagePokemon = {this.state.pokemon.sprites.other.official_artwork.front_default}
                    // habitat = {this.state.pokemon_species.habitat.name}
                    // description = {this.state.pokemon_species.flavor_text_entries}
                    descriptExpanded = {this.handleDescriptionExpanded}
                    expanded = {this.state.descriptOpen}
                /> 
                </div>
            );
        }else{
            return(
                <p>Loading...</p>
            );
        }
    }
};

export default BuildPokemonCard;