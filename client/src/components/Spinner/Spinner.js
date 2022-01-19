import React from 'react';
import { makeStyles} from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Spinner(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Typography>Loading...</Typography>
            <CircularProgress />
        </div>
    );
};