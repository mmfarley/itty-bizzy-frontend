import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from "../state/history";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout } from '../state/actions/actions'
import Icon from '@material-ui/core/Icon';


class _NavBar extends Component {

    // state = {
    //     loggedIn: false
    // }
    
    
    menuOptions = () => {
        if (localStorage.getItem("user")) {
            return(
                <><Button
                    onClick={() => {history.push('/find-biz')}}
                    color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>search</Icon>
                </Button>
                <Button
                    onClick={() => {history.push('/biz-dash')}}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>store</Icon></Button>
                <Button
                    onClick={() => {history.push('/messages')}}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>forum</Icon></Button>
                <Button
                    onClick={() => {history.push('/user-dash')}}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>home</Icon></Button>
                <Button
                    onClick={() => {
                        this.props.logout()
                        history.push('/')
                    }}
                    color="inherit">Logout</Button></>
        )}else{
                return(
                <><Button
                    onClick={() => {
                        history.push('/login')
                    }}
                    color="inherit">Login</Button></>
                )}
    }
    
    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <AppBar position="static">
                    <Toolbar>
                        <Typography style={{ flexGrow: 1 }} onClick={() => {
                            history.push('/user-dash')
                        }} variant="h5" color="inherit" >
                            Itty Bizzy
                            <Icon color="inherit" style={{ fontSize: 20 }}>public</Icon>
                        </Typography>
                        {this.menuOptions()}
                    </Toolbar>
                </AppBar>
            </div>
    );
    }
}

export const NavBar = connect(null, { logout })(_NavBar);

