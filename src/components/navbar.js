import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from "../state/history";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { logout } from '../state/actions/actions'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function _NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Itty Bizzy
          </Typography>
                    <Button 
                    onClick={() => {
                        props.logout()
                        history.push('/')
                    }} 
                    color="inherit">Logout</Button>
                    <Button
                        onClick={() => {
                            history.push('/login')
                        }}
                        color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

_NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const NavBar = connect(null, { logout })(withStyles(styles)(_NavBar));

