import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux'
import { getConversations } from '../state/actions/actions'

class _UserDash extends Component {

    // componentDidMount() {
    //     console.log("component mounted")
    //     this.props.getConversations(this.props.user.id)

    // }

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

const mapStateToProps = (state) => ({
    conversations: state.conversations,
    user: state.currentUser
})

export const UserDash = connect(mapStateToProps, { getConversations })(_UserDash);
