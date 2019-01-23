import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MessageCard } from './messagecard'
import { connect } from 'react-redux'
import { getConversations } from '../state/actions/actions'
import Icon from '@material-ui/core/Icon';
import { NavBar } from './navbar'

class _Messages extends Component {

    componentWillMount() {
        this.props.getConversations(this.props.user.id)  
    }

    componentDidMount() {
        this.fetchNewMessages()
    }

    fetchNewMessages = () => {
        setInterval(()=>this.props.getConversations(this.props.user.id), 1000)
    }

    generateMessageCards = () => {
        if (this.props.conversations){
        return this.props.conversations.map((conversation) => (
            <Grid item >
                <MessageCard conversation={conversation.conversation} messaged_user={conversation.messaged_user}/>
            </Grid>
        ))}
    }

    render() {
        return (
            <div>
                <NavBar />
                <Paper elevation="24" style={{ padding: 40, margin: 100 }} align="center">
                    <br />
                    <Typography color="primary" variant="h4">Messages</Typography><br /><br />
                    <Icon color="primary" style={{ fontSize: 60 }}>forum</Icon><br /><br /><br />
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.generateMessageCards()}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    conversations: state.conversations,
    user: state.currentUser,
    my_biz: state.my_biz
})

export const Messages = connect(mapStateToProps, { getConversations })(_Messages);
