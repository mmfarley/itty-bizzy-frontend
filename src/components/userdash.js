import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import {redirect} from "../state/history";
import {Invoices} from "./invoices";
import { getInvoices } from '../state/actions/actions'
import { getMyBiz } from '../state/actions/actions'
import { getBizzys } from '../state/actions/actions'
import { getClients } from '../state/actions/actions'
import { getAppointments } from '../state/actions/actions'
import {BizCard} from "./bizcard";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { NavBar } from './navbar'
import { getClientBusinesses } from '../state/actions/actions'


class _UserDash extends Component {

    componentWillMount(){
        this.props.getInvoices(this.props.user.id)
        this.props.getBizzys()
        this.props.getMyBiz(this.props.user.id)
        this.props.getClientBusinesses(this.props.user.id)
        if(this.props.my_biz){
            this.props.getClients(this.props.my_biz.id)
            this.props.getAppointments(this.props.my_biz.id)
        }  
    }

    generateBigIconLinks = (link, icon, text) => {
        return <>
        <Grid item xs>
                <Paper elevation="5" onClick={() => { redirect(link) }} style={{ padding: 40, margin: 30, width: 300 }}>
                <Icon color="primary" style={{ fontSize: 60 }}>{icon}</Icon>
                <br /><br />
                <Typography color="textSecondary" variant="h5" align="center">
                    {text}
                </Typography>
            </Paper>
        </Grid>
        </>
    }

    fakeBizExample = () => {
        return {
            user_id: this.props.user.id,
            name: "Itty Biz Example", 
            service_type: "Service Type",
            hourly_rate: 25,
            description: "This is where you'll give a brief background on your Itty Bizzy. How long you've been doing it, any specifics about your skills, etc."
        }
    }

    renderMyBizCard = () => {
        if(this.props.my_biz){
            return <BizCard onClick={() => redirect('/my-biz')} biz={this.props.my_biz} />
        }else{
            return <BizCard biz={this.fakeBizExample()} />
        }
    }

    
    bizInfo = () => {
        return <>
            <Grid item xs>
                <Card elevation="10" style={{ padding: 15, margin: 30, width: 350, maxHeight: 600 }} align="center">
                    <CardContent>
                        <div onClick={() => redirect('/my-biz')}>
                        <Icon color="primary" style={{ fontSize: 60 }}>edit</Icon><br /><br />
                        </div>
                        <Typography paragraph color="textSecondary" variant="h5">
                            The adjacent card shows how your Itty Bizzy is displayed in a search.<br /><br />
                            If you would like to add, edit, or delete your Itty Bizzy, you can click on the edit icon above and you will be taken to your Itty Bizzy page.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    }

    renderFavoriteBizzys = () => {
        if(this.props.client_businesses){
           return <Paper elevation="5" style={{ padding: 40, margin: 30 }} align="center">
                <Typography color="primary" variant="h4">
                    Itty Bizzys you use
                </Typography>
                <br />
                <Icon color="primary" style={{ fontSize: 50 }}>public</Icon>
                <br />
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.client_businesses.map(biz => (<BizCard biz={biz }/>))}
                </Grid>
            </Paper>
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Paper elevation="5" style={{ padding: 40, margin: 30 }} align="center">
                <br /><br />
                    <Typography color="primary" variant="h3">
                    Welcome to Itty Bizzy, {this.props.user.name}!
                    </Typography>
                    <br /><br />
                    <Icon color="primary" style={{ fontSize: 60 }}>public</Icon>
                    <br /><br />
                    <Typography variant="h6" color="textSecondary">
                        You can create or edit your Itty Bizzy, view your messages,<br />  create appointments, view appointments on your calendar,
                        <br />  keep track of invoicing, or search for an Itty Bizzy near you!
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.generateBigIconLinks('/my-biz', "store", 'My Itty Biz')}
                        {this.generateBigIconLinks('/messages', "forum", 'My Messages')}
                        {this.generateBigIconLinks('/find-biz', 'search', 'Find Itty Bizzys')}
                    </Grid>
                </Paper>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="primary" variant="h4">
                        Your Itty Bizzy
                    </Typography>
                    <br />
                    <Icon color="primary" style={{ fontSize: 50 }}>business_center</Icon>
                    <br />
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.bizInfo()}
                        {this.renderMyBizCard()}
                    </Grid>
                </Paper>
                <Invoices currentUser={this.props.user} received_invoices={this.props.received_invoices} />
                {this.renderFavoriteBizzys()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    received_invoices: state.received_invoices,
    my_biz: state.my_biz,
    bizzys: state.bizzys,
    client_businesses: state.client_businesses
})

export const UserDash = connect(mapStateToProps, { getInvoices, getMyBiz, getBizzys, getClients, getAppointments, getClientBusinesses })(_UserDash);
