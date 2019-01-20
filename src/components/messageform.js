import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { sendMessage } from '../state/actions/actions'
import { connect } from 'react-redux';

class _MessageForm extends Component {

    state = {
        content: '',
        user_id: this.props.user_id,
        messaged_user_id: this.props.messaged_user_id
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.sendMessage(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={e => this.handleOnSubmit(e)} noValidate autoComplete="off">
                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={this.handleOnChange}
                        multiline
                        margin="normal"
                        value={this.state.content}
                        name="content"
                        variant="outlined" />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Send Message
                </Button>
            </form>
        )
    }
}

export const MessageForm = connect(null, { sendMessage })(_MessageForm);