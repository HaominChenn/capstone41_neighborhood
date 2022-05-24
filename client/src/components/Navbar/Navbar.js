import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import useStyles from '.styles.js';
import memories from '../../images/memories.png';
const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">Mini Neighbourhood</Typography>
    <img className={classes.image} src={memories} alt="icon" height="60" />
    </AppBar>
    </div>
  );
};

export default Navbar;