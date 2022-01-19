import React, { Component } from 'react';
import PokemonList from '../pages/PokemonList';
import Spinner from '../components/Spinner/Spinner';
import axios from 'axios';

class BuildPokemonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            error:false,
            page:1,
            count : 0,
            currentPageURL: '/api/v2/pokemon?limit=6&offset=0',
            prevPageURL: null,
            nextPageURL: null,
            pokemonList: [],
            pokemonData: null,
        };
    }

    componentDidMount(){
        this.axiosCancelSource = axios.CancelToken.source()
            axios.get(this.state.currentPageURL, 
                {cancelToken: this.axiosCancelSource.token },
                {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        },
                })
                .then(response => {
                    this.setState({nextPageURL: response.data.next, 
                                   prevPageURL: response.data.previous, 
                                   pokemonList : response.data.results, 
                                   count: response.data.count , loading:true});

                })
                .catch(error => {
                    this.setState({error:true});
                    });
    };

    componentWillUnmount(){   
        this.axiosCancelSource.cancel('Axios request canceled.')
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log("componentDidUpdate ");
        if(prevState.page !== this.state.page){
            axios.get(this.state.currentPageURL)
            .then(response => {
                this.setState({
                               nextPageURL: response.data.next, 
                               prevPageURL: response.data.previous, 
                               pokemonList : response.data.results,
                               count: response.data.count,
                               loading:true,
                            });
            })
            .catch(error => {
                    console.log(error);
                });
        }
    }

    handleClickOnPokemon = (pokemon) => {
        console.log("Clicked Pokemon" + pokemon.name);
        let nameP = pokemon.name; 
        this.props.history.push(`/${nameP}`);
    };

    handleGoToNextPage = () => {
        let currentPage = this.state.page;
        let nextPage = currentPage + 1;
        this.setState({page: nextPage, currentPageURL: this.state.nextPageURL});
    };

    handleGoToPreviosPage = () => {
        let currentPage = this.state.page;
        let previosPage = currentPage - 1;
        this.setState({page: previosPage, currentPageURL: this.state.prevPageURL});
    };

    render(){
        let totalPages = Math.ceil(this.state.count / 6);
        if(this.state.error){
            return (<div>
                <p>Pokemon List can't be loaded!</p>
                <Spinner/>
            </div>);
        }  
        if(!this.state.loading){
            return(<Spinner/>);
        }else{
            return(
                <div style={{marginTop:90, paddingLeft: 100}}>
                    <PokemonList 
                                pokemonList={this.state.pokemonList} 
                                click={(pokemon) => this.handleClickOnPokemon(pokemon)}
                                nextClick={this.handleGoToNextPage}
                                previousClick={this.handleGoToPreviosPage}
                                page={this.state.page}
                                totalPages={totalPages}
                            />
                </div>   
            );
        }

    }
};

export default BuildPokemonList;