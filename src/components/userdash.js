import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import {redirect} from "../state/history";
import Invoices from "./invoices";
import { getInvoices } from '../state/actions/actions'
import { getMyBiz } from '../state/actions/actions'
import { getBizzys } from '../state/actions/actions'

class _UserDash extends Component {

    componentWillMount(){
        this.props.getInvoices(this.props.user.id)
        this.props.getBizzys()
        this.props.getMyBiz(this.props.user.id)
    }

    generateBigIconLinks = (link, icon, text) => {
        return <>
        <Grid item xs>
            <Paper onClick={() => { redirect(link) }} style={{ padding: 40, margin: 30, width: 300 }}>
                <Icon color="primary" style={{ fontSize: 60 }}>{icon}</Icon>
                <br /><br />
                <Typography color="textSecondary" variant="h5" align="center">
                    {text}
                </Typography>
            </Paper>
        </Grid>
        </>
    }

    render() {
       
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="primary" variant="h4">
                    Welcome to Itty Bizzy, {this.props.user.name}!
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                        You can create or edit your Itty Bizzy, view your messages, check invoices, or search for an Itty Bizzy near you!
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.generateBigIconLinks('/my-biz', "store", 'My Itty Biz')}
                        {this.generateBigIconLinks('/messages', "forum", 'My Messages')}
                        {this.generateBigIconLinks('/find-biz', 'search', 'Find Itty Bizzys')}
                    </Grid>
                </Paper>
                <Invoices currentUser={this.props.user} received_invoices={this.props.received_invoices} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    received_invoices: state.received_invoices,
    my_biz: state.my_biz,
    bizzys: state.bizzys
})

export const UserDash = connect(mapStateToProps, { getInvoices, getMyBiz, getBizzys })(_UserDash);
