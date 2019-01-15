import React, { Component } from "react";
import { login } from '../state/actions/actions'
import { connect } from 'react-redux';
import history from "../state/history";

class _Login extends Component {

    state = {
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
        this.props.login(this.state)
        history.push('/userDash')
    }

    render() {
        return (
            <div>            
                <form onSubmit={e => this.handleOnSubmit(e)} >
                    <input
                        name='email'
                        placeholder='Email'
                        onChange={this.handleOnChange}
                    />
                    <input
                        name='password'
                        placeholder='Password'
                        type='password'
                        onChange={this.handleOnChange}
                    />
                    <button type="submit">Login</button>
                </form>            
            </div>
        )
    }
}

export const Login = connect(null, { login })(_Login)