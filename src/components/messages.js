import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MessageCard from './messagecard'

class Messages extends Component {

    render() {

        return (
            <div>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography variant="h5">These are your messages</Typography>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <MessageCard />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <MessageCard />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}


export default Messages;
