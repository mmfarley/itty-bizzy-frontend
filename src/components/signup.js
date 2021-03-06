import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { Component } from "react";
import { signup } from '../state/actions/actions'
import { login } from '../state/actions/actions'
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';


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
        // this.props.login({email: this.state.email, password: this.state.password})
    }

    errorBox() {
        if (this.props.login_error) {
            return (
                <Paper elevation="15" style={{ padding: 10, margin: 60, maxWidth: 250 }} align="center">
                    <Icon color="error" style={{ fontSize: 40 }}>error</Icon>
                    <Typography color="textSecondary">
                        {this.props.login_error}
                    </Typography>
                </Paper>
            )
        }
    }

    render() {
        return (
            <div align="center">
                {this.errorBox()}
                <Paper elevation="24" style={{ padding: 40, margin: 250, maxWidth: 420 }} align="center">
                    <Icon color="primary" style={{ fontSize: 50 }}>add_circle</Icon>
                    <br /><br />
                    <Typography color="textSecondary" align="center" component="h1" variant="h5">
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

const mapStateToProps = (state) => ({
    login_error: state.loginError
})

export const Signup = connect(mapStateToProps, { signup, login })(_Signup);
