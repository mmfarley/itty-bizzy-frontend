import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MessageCard } from './messagecard'
import { connect } from 'react-redux'
import { getConversations } from '../state/actions/actions'

class _Messages extends Component {

    componentDidMount(){
        this.updateMessages()
    }

    componentWillMount() {
        console.log("component mounted")
        this.props.getConversations(this.props.user.id)
        
    }
    updateMessages = () => {
        setInterval(() => this.props.getConversations(this.props.user.id), 5000)
    }

    generateMessageCards = () => {
        if (this.props.conversations){
        return this.props.conversations.map((conversation) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
                <MessageCard conversation={conversation.conversation} messaged_user={conversation.messaged_user}/>
            </Grid>
        ))}
    }


    render() {
        return (
            <div>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="textSecondary" variant="h5">Your Messages</Typography>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {this.generateMessageCards()}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    conversations: state.conversations,
    user: state.currentUser
})

export const Messages = connect(mapStateToProps, { getConversations })(_Messages);
