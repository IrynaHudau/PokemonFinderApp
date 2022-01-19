import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@mui/styles';
import Logo from '../../assets/pokemon-logo.png';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
  }));

const DesktopToolbar = (props) => {
    const classes = useStyles();
    return(
        <Toolbar>
            <div  className={classes.title}>
                <img src={Logo} alt="PokemonLogo" height={60}  width={160}></img>
            </div>
                <Button color="inherit" onClick={props.clickedHome} startIcon={<HomeIcon fontSize="small" />}>Home</Button>
                <Button color="inherit" onClick={props.clickedAbout} startIcon={<InfoIcon fontSize="small" />}>About</Button>
        </Toolbar>
    );
  };

  export default DesktopToolbar;