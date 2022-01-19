import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Logo from '../../assets/pokemon-logo.png';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    hide: {
        display: 'none',
      },
  }));

const MobileToolbar = (props) => {
    const classes = useStyles();
    return(
        <Toolbar>
            <IconButton 
                edge="start" 
                className={clsx(classes.menuButton, props.open && classes.hide)}
                onClick={props.click} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon />
                </IconButton>
                <div  className={classes.title}>
                  <img src={Logo} alt="PokemonLogo" height={50}  width={120}></img>
                </div>
        </Toolbar>
    );
};
export default MobileToolbar ;