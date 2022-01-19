import React from 'react';
import { makeStyles} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Chip from '@material-ui/core/Chip';
import {Button , ButtonGroup, Collapse} from '@mui/material';
import Typography from '@mui/material/Typography';
//import {ListItem, List, ListItemText} from '@material-ui/core/';
// import IconButton from '@material-ui/core/IconButton';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(12),
        margin: 'auto',
        maxWidth: 640,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
      },    
  }));

  const getUpperFirstLetter = (str) => {
    console.log(str);
    let firstLetter = str.charAt(0).toLocaleUpperCase()
    let newStr = firstLetter;
    for(let i = 1; i < str.length; i++){
        newStr = newStr.concat(str[i]); 
    }
    return newStr;
  };

 const calcFeet = (length) => {
    return Math.floor(((length*10)/2.54)/12);
  };

  const calcInches = (length) => {
    let feet = calcFeet(length) * 12;
    let inces = ((length*10)/2.54) - feet;
    return inces.toFixed(2);
  };

  const corectNumber = (num) => {
    if(num < 10){
        return '00' + num;
    }else if(num < 100){
        return '0' + num;
    }else{
        return num;
    }
  };
  

const PokemonCard = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
             <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.img} alt={`Pokemon ${props.pokemon.name}`} src={props.pokemon.img} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs container direction="column">
                            <Grid item xs>
                                <Typography gutterBottom variant="h5" component="h2">
                               {console.log(props.pokemon.name)}
                                    {/* {getUpperFirstLetter(props.pokemon.name) + '  #' + corectNumber(props.pokemon.id)} */}
                                    {props.pokemon.name + '  #' + corectNumber(props.pokemon.id)}
                                </Typography>  
                                {/* <Typography >
                                    {props.description[0].flavor_text}
                                    <IconButton onClick={props.descriptExpanded} aria-expanded={props.expanded} aria-label="show more">
                                        <ExpandMoreIcon fontSize='small' />
                                    </IconButton>
                                </Typography> */}
                                
                                 {/* <Collapse in={props.expanded}>
                                        {props.description.map((elm, ind) => {
                                            return( 
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {ind > 0 ? elm.flavor_text : null}
                                                </Typography>
                                            );
                                        })} 
                                  </Collapse>         */}
                           
                             </Grid>   

                            <Grid item xs >
                                <Paper style={{backgroundColor:'lightcyan', padding:'10px'}} elevation={3} >
                                    <Typography >
                                        <span style={{fontWeight: 'bold'}}>Height: </span> {props.pokemon.height / 10} m / {calcFeet(props.pokemon.height)} ft {calcInches(props.height)} in ,  
                                    </Typography>
                                    <Typography >
                                        <span style={{fontWeight: 'bold'}}>  Width: </span>{props.pokemon.weight / 10} kg / {((props.pokemon.weight/10) * 2.2046226218).toFixed(1)} lbs
                                    </Typography>
                                </Paper>
                                <Typography gutterBottom></Typography>
                             </Grid>

                             <Grid item xs >
                                <Typography  variant="h6">Ability </Typography>      
                                
                                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                    {props.pokemon.abilities.map(elm => {
                                        return(
                                            <Button>{elm.ability.name}</Button>
                                             );
                                        })}
                                </ButtonGroup>
                            </Grid>

                            <Grid item xs>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}> 
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Type:
                                        </Typography>
                                        {/* {props.types.map(elm => {
                                            return(
                                                <Chip label={elm.type.name} style={{backgroundColor:getColor(elm.type.name), color:'white'}} size="small"/>
                                            );
                                        })} */}
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={6}> 
                                        <Paper style={{backgroundColor:'lightGreen', padding:'10px'}}>
                                            <Typography  variant="button" display="block" gutterBottom>Habitat</Typography>
                                            <Button>{props.pokemon.habitat}</Button>
                                        </Paper>
                                        
                                        {/* <Typography  variant="button" display="block" gutterBottom>Location area</Typography> 
                                        <List>
                                            {props.location.map(elm => {
                                                return(
                                                    <ListItem>
                                                        <ListItemText primary={elm.location_area.name}/>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>  */}
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        // <Container component="main" maxWidth="xs">
        //     <div className={classes.paper}>
        //         <Card className={classes.root}>
        //             <CardActionArea>
        //                 <CardMedia 
        //                     className={classes.media} 
        //                     component="img" 
        //                     alt={`Pokemon ${props.name}`}
        //                     image={props.imagePokemon} 
        //                     title={`Pokemon ${props.name}`}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h5" component="h2">
        //                         {props.name}
        //                     </Typography>
        //                     <Typography variant="body2" color="textSecondary" component="p">
        //                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        //                         across all continents except Antarctica
        //                     </Typography>
        //                 </CardContent>
        //             </CardActionArea>
        //             <CardActions>
        //                 <Button size="small" color="primary">
        //                     Share
        //                 </Button>
        //                 <Button size="small" color="primary">
        //                     Learn More
        //                 </Button>
        //             </CardActions>
        //         </Card>
        //     </div>
        // </Container>
    );
};

export default PokemonCard;