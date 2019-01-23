import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import {Invoices} from "./invoices";
import { getInvoices } from '../state/actions/actions'
import { BizCard } from "./bizcard";
import { BizForm } from "./bizform";
import { NavBar } from './navbar'
import { getClients } from '../state/actions/actions'
import { Clients } from './clients'
import { getMessagedUsers } from '../state/actions/actions'
import { getAppointments } from '../state/actions/actions'
import { MyCalendar } from './mycalendar'
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';


class _MyBiz extends Component {

    state={
        showInvoiceForm: false,
        billed_user_id: '',
        billed_user_name: ''
    }

    componentDidMount(){
        this.props.getInvoices(this.props.user.id)
        this.props.getMessagedUsers(this.props.user.id)
        if(this.props.my_biz){
            this.props.getClients(this.props.my_biz.id)
            this.props.getAppointments(this.props.my_biz.id)
        }
    }

    renderBizCard = () => {
        if(this.props.my_biz){
            return <BizCard biz={this.props.my_biz} />
        }else{
            return <BizCard biz={this.fakeBizExample()} />
        }
    }

    fakeBizExample = () => {
        return {
            user_id: this.props.user.id,
            name: "Let's Get Bizzy",
            service_type: "Example",
            hourly_rate: 25,
            description: "This is where you'll give a brief background on your Itty Bizzy. How long you've been doing it, any specifics about your skills, etc."
        }
    }

    renderBizForm = () => {
        if (this.props.my_biz) {
            return <BizForm biz={this.props.my_biz} />
        }else{
            return <BizForm />
        }
    }

    renderInvoiceAndClients = () => {
        if(this.props.my_biz){
            return <>
                <Clients messaged_users={this.props.messaged_users} />
                <Invoices sent_invoices={this.props.sent_invoices} />
            </>
        }
    }

    renderCalendar = () => {
        if(this.props.appointments && this.props.my_biz && this.props.clients && this.props.clients.length > 0){
            return <MyCalendar />
        }
    }
   
    render() {

        return (
            <div>
                <NavBar />
                <Paper elevation="24" style={{ padding: 40, margin: 120 }} align="center">
                    <br />
                    <Typography color="Primary" variant="h4">
                        Your Itty Bizzy
                    </Typography>
                    <br />
                    <Icon color="primary" style={{ fontSize: 50 }}>public</Icon>
                    <br />
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24} style={{ padding: 24 }} >
                        {this.renderBizCard()}
                        {this.renderBizForm()}
                    </Grid>
                </Paper>
                {this.renderCalendar()}
                {this.renderInvoiceAndClients()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.my_biz,
    sent_invoices: state.sent_invoices,
    clients: state.clients,
    messaged_users: state.messaged_users,
    appointments: state.appointments
})

export const MyBiz = connect(mapStateToProps, {getInvoices, getClients, getMessagedUsers, getAppointments })(_MyBiz);