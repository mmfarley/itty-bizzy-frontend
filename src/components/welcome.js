import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class Welcome extends Component {
    

    render() {
        
        return (
            <div>
                <Paper>
                    <Typography>Welcome to Itty Bizzy</Typography>
                </Paper>
            </div>
        );
    }
}


export default Welcome;