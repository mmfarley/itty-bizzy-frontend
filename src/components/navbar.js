import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from "../state/history";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout } from '../state/actions/actions'


class _NavBar extends Component {

    // state = {
    //     loggedIn: false
    // }
    
    
    menuOptions = () => {
        if (localStorage.getItem("user")) {
            return(
                <><Button
                    onClick={() => {
                        history.push('/my-biz-dash')
                    }}
                    color="inherit">My Itty Biz</Button>
                <Button onClick={() => {
                        history.push('/invoices')
                    }}
                    color="inherit">Invoices</Button>
                <Button
                    onClick={() => {
                        history.push('/messages')
                    }}
                    color="inherit">Messages</Button>
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
                <AppBar position="static">
                    <Toolbar>
                        <Typography style={{ flexGrow: 1 }} onClick={() => {
                            history.push('/user-dash')
                        }} variant="h5" color="inherit" >
                            Itty Bizzy
                        </Typography>
                        {this.menuOptions()}
                    </Toolbar>
                </AppBar>
            </div>
    );
    }
}

export const NavBar = connect(null, { logout })(_NavBar);

