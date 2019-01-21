import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Invoices from "./invoices";
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


class _MyBiz extends Component {

    state={
        my_biz: this.props.my_biz
    }

    componentWillMount(){
        this.props.getMyBiz(this.props.user.id)
        this.props.getInvoices(this.props.user.id)
    }

    renderBizCard = () => {
        if(this.props.my_biz){
            return <BizCard biz={this.props.my_biz} />
        }
    }
    // renderInvoiceForm = () => {
    //     has appropriate fields for sending an invoice to associated clients
    // }

    renderBizForm = () => {
        if (this.props.my_biz) {
            return <BizForm biz={this.props.my_biz} />
        }else{
            return <BizForm />
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
                    <Typography color="Primary" variant="h4">
                        Edit/Create
                    </Typography>
                    {this.renderBizForm()}
                </Paper>
                <Invoices currentUser={this.props.user} sent_invoices={this.props.sent_invoices}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.myBiz,
    sent_invoices: state.sent_invoices
})

export const MyBiz = connect(mapStateToProps, {getMyBiz, getInvoices})(_MyBiz);