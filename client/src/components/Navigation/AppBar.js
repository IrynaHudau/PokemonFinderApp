import React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import MobileToolbar from './MobileToolbar';
import DesktopToolbar from './DesktopToolbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
  }));


const Appbar = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar 
                position="fixed" 
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })}>
                {props.mobileView ? 
                    <MobileToolbar click={props.menyButtonClicked} open={props.open} /> : 
                    <DesktopToolbar clickedAbout={props.clickedAbout} clickedHome={props.clickedHome}/>}
            </AppBar>
        </div>
    );
};

export default Appbar;