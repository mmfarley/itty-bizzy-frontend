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

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }} onClick={() => {
                        history.push('/user-dash')
                    }} variant="h5" color="inherit" >
                        Itty Bizzy
                        <Icon color="inherit" style={{ fontSize: 20 }}>public</Icon>
                    </Typography>
                    <Button
                        onClick={() => { history.push('/find-biz') }}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>search</Icon>
                    </Button>
                    <Button
                        onClick={() => { history.push('/my-biz') }}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>store</Icon></Button>
                    <Button
                        onClick={() => { history.push('/messages') }}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>forum</Icon></Button>
                    <Button
                        onClick={() => { history.push('/user-dash') }}
                        color="inherit"><Icon color="inherit" style={{ fontSize: 30 }}>home</Icon></Button>
                    <Button
                        onClick={() => {
                            this.props.logout()
                            history.push('/')
                        }}
                        color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export const NavBar = connect(null, { logout })(_NavBar);

