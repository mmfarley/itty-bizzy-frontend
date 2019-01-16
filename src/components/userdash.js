import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

class UserDash extends Component {

    render() {

        return (
            <div>
                <CssBaseline />
                <Paper>
                    <Typography>This is your user dash</Typography>
                </Paper>
            </div>
        );
    }
}


export default UserDash;