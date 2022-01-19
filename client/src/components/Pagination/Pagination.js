import React from 'react';
import { makeStyles} from '@mui/styles';
import { Button, IconButton, ButtonGroup } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    pagination:{
        '& > *': {
          marginTop: theme.spacing(2),
        },
      },
}));

const Pagination = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.pagination}>
            <nav>
            <ButtonGroup variant="text" color="primary" aria-label="pagination">
            <IconButton aria-label="previous" onClick={props.previousClick} disabled={ props.page === 1 ? true : false}>
                <ArrowBackIosIcon />
            </IconButton>
                <Button>{props.page} /  {props.totalPages}</Button>
            <IconButton aria-label="next" onClick={props.nextClick}  disabled={ props.page === 187 ? true : false}>
                <ArrowForwardIosIcon/>
            </IconButton>
            </ButtonGroup>
            </nav>
      </div>
    );
};

export default Pagination;