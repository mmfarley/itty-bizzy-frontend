import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { sendMessage } from '../state/actions/actions'
import { connect } from 'react-redux';

class _MessageCard extends Component {

    state = {
        content: '',
        user_id: this.props.user.id,
        messaged_user_id: this.props.messaged_user.id,
        sent_at: new Date()
    }
    createMessages = () => {
        return this.props.conversation.map((message) => {
            if (message.user_id == this.state.user_id){
                return <Card style={{ padding: 5, margin: 5 }} align="right">
                    <Typography color="textSecondary" >{message.content}</Typography>
                </Card>
            }else{
                return <Card style={{ padding: 10, margin: 5 }} align="left">
                    <Typography color="primary" >{message.content}</Typography>
                </Card>
            }
        })
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
            <div>
                <Typography color="textSecondary">
                    <Card style={{ padding: 10, margin: 10, maxWidth: 250 }} align="center">
                        Conversation with 
                        <Typography color="primary">
                        {this.props.messaged_user.first_name}{this.props.messaged_user.last_name}
                        </Typography>
                    </Card>
                </Typography>
                <Card style={{ padding: 15, margin: 30, maxWidth: 500, maxHeight: 400, overflow: 'auto' }} align="center">
                    {this.createMessages()}
                    <form onSubmit={e => this.handleOnSubmit(e)} noValidate autoComplete="off">
                        <FormControl margin="normal" required fullWidth>
                            <TextField 
                            onChange={this.handleOnChange}
                            multiline
                            margin="normal"
                            value={this.state.content}
                            name="content" 
                            variant="outlined"/>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Send Message
                        </Button>
                    </form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const MessageCard = connect(mapStateToProps, { sendMessage })(_MessageCard);


