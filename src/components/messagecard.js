import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { sendMessage } from '../state/actions/actions'
import { connect } from 'react-redux';
import {MessageForm} from './messageform'
import Icon from '@material-ui/core/Icon';

class _MessageCard extends Component {

    createMessages = () => {
        return this.props.conversation.map((message) => {
            if (message.user_id === this.props.user.id){
                return <Card elevation="3" style={{ padding: 5, margin: 5 }} align="right">
                    <Typography color="textSecondary" >{message.content}</Typography>
                </Card>
            }else{
                return <Card elevation="3" style={{ padding: 10, margin: 5 }} align="left">
                    <Typography color="primary" >{message.content}</Typography>
                </Card>
            }
        })
    }

    render() {

        return (
            <div>
                <Card elevation="3" style={{ padding: 10, width: 300 }} align="center"> 
                    <Typography variant="h6" color="primary">
                    {this.props.messaged_user.name}
                    </Typography>
                    <Icon color="primary" style={{ fontSize: 40 }}>person</Icon>
                </Card>
                <Card elevation="10" style={{ padding: 15, margin: 30, width: 300, maxHeight: 400, "overflowY": 'auto' }} align="center">
                    {this.createMessages()}
                    <MessageForm 
                        messaged_user_id={this.props.messaged_user.id} 
                        user_id={this.props.user.id}
                    />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const MessageCard = connect(mapStateToProps, { sendMessage })(_MessageCard);


