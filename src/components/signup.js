import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import React, { Component } from "react";
import { signup } from '../state/actions/actions'
import { connect } from 'react-redux';
import history from "../state/history";


class _Signup extends Component {

    state = {
        name: '',
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
    }

    render() {
        return (
            <div align="center">
                <Paper style={{ padding: 40, margin: 100, maxWidth: 420 }} align="center">
                    <Avatar >
                        <AddIcon />
                    </Avatar>
                    <Typography align="center" component="h1" variant="h5">
                        Sign Up
            </Typography>
                    <form onSubmit={e => this.handleOnSubmit(e)}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input onChange={this.handleOnChange} id="name" name="name" />
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
            </div>
        );
    }
}


export const Signup = connect(null, { signup })(_Signup);
