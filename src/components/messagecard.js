import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';

class MessageCard extends Component {

    render() {

        return (
            <div>
                <Typography>
                <Card style={{ padding: 40, margin: 30, maxWidth: 500 }} align="center">
                    This can be a conversation
                    <Card style={{ padding: 10, margin: 10, maxWidth: 420 }} align="left">user</Card>
                    <Card style={{ padding: 10, margin: 10, maxWidth: 420 }} align="right">other</Card>
                    <Card style={{ padding: 10, margin: 10, maxWidth: 420 }} align="left">user</Card>
                    <Card style={{ padding: 10, margin: 10, maxWidth: 420 }} align="right">other</Card>
                </Card>
                </Typography>
            </div>
        );
    }
}


export default MessageCard;


