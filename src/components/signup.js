import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import React, { Component } from "react";
import { signup } from '../state/actions/actions'
import { connect } from 'react-redux';
import history from "../state/history";


class _Signup extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state)
        history.push('/login')
    }

    render() {
        return (
            <main >
                <CssBaseline />
                <Paper style={{ padding: 20, margin: 200 }} align="center">
                    <Avatar >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography align="center" component="h1" variant="h5">
                        Sign Up
            </Typography>
                    <form onSubmit={e => this.handleOnSubmit(e)}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="first_name">First Name</InputLabel>
                            <Input onChange={this.handleOnChange} id="first_name" name="first_name" />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="last_name">Last Name</InputLabel>
                            <Input onChange={this.handleOnChange} name="last_name" type="last_name" id="last_name"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input onChange={this.handleOnChange} id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input onChange={this.handleOnChange} name="password" type="password" id="password" autoComplete="current-password" />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
            </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}


export const Signup = connect(null, { signup })(_Signup);
