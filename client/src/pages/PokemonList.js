import React from 'react';
import getColor from '../helper/colorFinder';
import {ImageListItemBar, ImageListItem, ImageList} from '@mui/material';
import { makeStyles} from '@mui/styles';
import { Chip, ListSubheader, Grid} from '@mui/material';
import LogoBall from '../assets/pokeball.png';
import Pagination from '../components/Pagination/Pagination';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop:70,
  },
  gridList: {
    width: 780,
    height: 650,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 100%)',
    fontWeight:'bold',
  },
  img:{
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const PokemonList = (props) => {
    const classes = useStyles();
    return(
      <div className={classes.content}>
        <Grid 
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column">
          <Grid item xs={12}>
            <Grid container wrap="nowrap" spacing={2} alignItems="center"  justify="center">
              <Grid item>
                  <img src={LogoBall} alt="Pokeball" height={60}  width={60}></img>
              </Grid>
              <Grid item xs zeroMinWidth>
              <ListSubheader>Pokemon Collection </ListSubheader>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ImageList cellheight={200} spacing={24} className={classes.gridList}>
                {props.pokemonList.map((pokemon) => {
                  return(    
                    <ImageListItem key={pokemon.id} >
                      <img className={classes.img} src={pokemon.imgURL} alt={pokemon.id}/>     
                          <ImageListItemBar 
                            title={pokemon.name.toLocaleUpperCase()}
                            subtitle={
                                <Grid container spacing={2}>
                                  <Grid item xs>
                                    <span style={{fontWeight:'normal'}}>Height: {pokemon.height / 10} m, 
                                              Weight: {pokemon.weight / 10} kg / {((pokemon.weight/10) * 2.2046226218).toFixed(1)} lbs
                                    </span>
                                  </Grid>
                                  <Grid item xs>
                                    {pokemon.types.map(elm => {
                                        return( 
                                          <Chip key={elm.type.name} label={elm.type.name} style={{backgroundColor:getColor(elm.type.name), color:'white'}} size="small"/>
                                        );
                                      })
                                    }      
                                  </Grid>      
                                </Grid>
                            }
                            titleposition="bottom"
                            onClick={() => props.click(pokemon)}
                            className={classes.titleBar}
                          />
                    </ImageListItem>
                  )
                }
              )}
            </ImageList>
          </Grid>
          <Grid item xs={12}>
              <Pagination totalPages={props.totalPages} page={props.page} nextClick={props.nextClick} previousClick={props.previousClick}/>
          </Grid>
        </Grid>
      </div>  
    );
}

export default PokemonList;