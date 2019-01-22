import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import {Invoices} from "./invoices";
import Grid from '@material-ui/core/Grid';
import { getInvoices } from '../state/actions/actions'
import { getMyBiz } from '../state/actions/actions'
import { BizCard } from "./bizcard";
import { BizForm } from "./bizform";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { NavBar } from './navbar'
import { getClients } from '../state/actions/actions'
import { InvoiceForm } from "./invoiceform";
import Card from '@material-ui/core/Card';
import { Clients } from './clients'
import { getMessagedUsers } from '../state/actions/actions'


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
        }
    }

    renderBizCard = () => {
        if(this.props.my_biz){
            return <BizCard biz={this.props.my_biz} />
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
                <Invoices sent_invoices={this.props.sent_invoices} />
                <Clients messaged_users={this.props.messaged_users} />
            </>
        }
    }

   
    render() {

        return (
            <div>
                <NavBar />
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <br />
                    <Typography color="Primary" variant="h4">
                        Your Itty Bizzy
                    </Typography><br />
                    {this.renderBizCard()}
                </Paper>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    {this.renderBizForm()}
                </Paper>
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
    messaged_users: state.messaged_users
})

export const MyBiz = connect(mapStateToProps, {getInvoices, getClients, getMessagedUsers })(_MyBiz);