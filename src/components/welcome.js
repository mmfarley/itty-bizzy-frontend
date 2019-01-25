import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { redirect } from '../state/history';
import Card from '@material-ui/core/Card';


class Welcome extends Component {
   
    render() {
        
        return (
            <div onClick={() => redirect("/login")} style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1525857222756-37cdb4e87e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)", 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: "fixed",
                right: "0",
                bottom: "0",
                minWidth: "100%",
                minHeight: "100%",
                backgroundRepeat: 'no-repeat'}}>
                <div style={{
                    position: "fixed",
                    bottom: 75,
                    left: 600,
                    background: "rgba(0, 0, 0, 0)",
                    color: "#f1f1f1",
                    width: "100%",
                    padding: "20px",
                    textAlign: "center"
                }}>
                    <Typography color="primary" variant="h1">
                        <b>Itty Bizzy</b>
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary">
                        <b>Enter Site</b>
                    </Button>
                </div>
            </div>
        );
    }
}


export default Welcome;