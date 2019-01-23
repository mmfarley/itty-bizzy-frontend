import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Login } from './login'


class Welcome extends Component {
    

    render() {
        
        return (
            <div>
                <Paper elevation="24" style={{ padding: 40, margin: 120 }} align="center">
                    <Typography color="primary" variant="h4" align="center">
                        Welcome to Itty Bizzy!
                    </Typography>
                    <Login />
                </Paper>
                
            </div>
        );
    }
}


export default Welcome;