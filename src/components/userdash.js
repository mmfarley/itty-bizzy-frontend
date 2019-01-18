import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { getConversations } from '../state/actions/actions'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chat from '@material-ui/icons/Chat';
import Icon from '@material-ui/core/Icon';
import history from "../state/history";
import Invoices from "./invoices";

class _UserDash extends Component {

    // componentDidMount() {
    //     console.log("component mounted")
    //     this.props.getConversations(this.props.user.id)

    // }

    render() {
       
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="primary" variant="h5">
                    Welcome to Itty Bizzy, {this.props.user.first_name}!
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="h7">
                        You can create or edit your Itty Biz, view your messages, check invoices, or search for an Itty Biz near you
                    </Typography>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <Paper onClick={() => { history.push('/biz-dash') }} style={{ padding: 40, margin: 30 }}>
                                <Icon color="primary" style={{ fontSize: 60 }}>store</Icon>
                                <br /><br />
                                <Typography color="textSecondary" variant="h7" align="center">
                                TO GO TO MY ITTY BIZ. USE CUTE ICON OR SOMETHING. MAYBE RENDER SOME BIZ DETAILS.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <Paper onClick={() => {history.push('/messages')}} style={{ padding: 40, margin: 30 }}>
                                <Icon color="primary" style={{ fontSize: 60 }}>forum</Icon>
                                <br /><br />
                                <Typography color="textSecondary" variant="h7" align="center">
                                TO GO TO MY MESSAGES. USE CUTE ICON OR SOMETHING.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <Paper style={{ padding: 40, margin: 30 }}>
                                <Icon onClick={() => { history.push('/find-biz') }} color="primary" style={{ fontSize: 60 }}>search</Icon>
                                <br /><br />
                                <Typography color="textSecondary" variant="h7" align="center">
                                TO GO TO find businesses. USE CUTE ICON OR SOMETHING.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
                <Invoices />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    conversations: state.conversations,
    user: state.currentUser
})

export const UserDash = connect(mapStateToProps, { getConversations })(_UserDash);
