import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { sendMessage } from '../state/actions/actions'
import { connect } from 'react-redux';

class _MessageCard extends Component {

    state = {
        content: '',
        user_id: this.props.user.id,
        messaged_user_id: this.props.messaged_user_id,
        sent_at: new Date()
    }

    // createMessageCard = () => {
    //     <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
    //     <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
    // }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        // this.props.login(this.state)
        // history.push('/user-dash')
    }

    // componentDidMount(){
    //     this.props.getConversationsAndMessagedUsers(this.state.user_id)
    // }

    render() {

        return (
            <div>
                <Typography>
                    This can be a conversation
                    <Card style={{ padding: 40, margin: 30, maxWidth: 500, maxHeight: 400, overflow: 'auto' }} align="center">
                        
                        <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="left">user</Card>
                        <Card style={{ padding: 10, margin: 10 }} align="right">other</Card>
                    
                        <form onSubmit={e => this.handleOnSubmit(e)} noValidate autoComplete="off">
                            <FormControl margin="normal" required fullWidth>
                                <TextField 
                                onChange={this.handleOnChange} 
                                multiline 
                                id="content" 
                                margin="normal"
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
                </Typography>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const MessageCard = connect(mapStateToProps, { sendMessage })(_MessageCard);


