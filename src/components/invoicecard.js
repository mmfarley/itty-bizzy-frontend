import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { markAsPaid } from '../state/actions/actions'
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import { MessageForm } from './messageform'
import Icon from '@material-ui/core/Icon';


class _InvoiceCard extends Component {

    state = {
        showMessageForm: false
    }
    
    handlePaidOnClick = () => {
        this.props.markAsPaid(this.props.invoice.id, this.props.user.id)
    }

    renderMarkAsPaidButton = () => {
        if(!this.props.invoice.is_paid && (this.props.invoice.user_id === this.props.user.id)){
            return <><Button
                onClick={() => this.handlePaidOnClick()}
                fullWidth
                variant="outlined"
                color="primary">
                Mark As Paid
            </Button></>
        }
    }

    handleInquireOnClick = () => {
        this.setState({showMessageForm: true})
    }

    renderInquireButton = () => {
        if (!this.state.showMessageForm) {
            return <><Button
                onClick={() => this.handleInquireOnClick()}
                fullWidth
                variant="contained"
                color="primary">
                Inquire about this invoice
            </Button></>
        }
    }

    renderMessageForm = () => {
        if ((this.props.invoice.billed_user_id === this.props.user.id) && this.state.showMessageForm) {
            return <MessageForm prepend="Invoice Inquiry: " user_id={this.props.invoice.billed_user_id} messaged_user_id={this.props.invoice.user_id}/>
        } else if ((this.props.invoice.user_id === this.props.user.id) && this.state.showMessageForm) {
            return <MessageForm prepend="Invoice Inquiry: " user_id={this.props.invoice.user_id} messaged_user_id={this.props.invoice.billed_user_id} />
        }
    }

    renderInvoiceNames = () => {
        if (this.props.invoice.billed_user_id === this.props.user.id){
            return <Typography variant="h5" color="primary">Sent by: <br /> {this.props.invoice.sender}</Typography>
        } else if (this.props.invoice.user_id === this.props.user.id){
            return <Typography variant="h5" color="primary">Sent to: <br /> {this.props.invoice.recipient}</Typography>
        }
    }

    
    render() {

        return (
            <Card elevation="15" style={{ padding: 15, margin: 30, width: 300, maxHeight: 460, "overflow-y": 'auto' }} align="center">
                <CardContent>
                    {this.renderInvoiceNames()}
                    <Icon color="primary" style={{ fontSize: 40 }}>credit_card</Icon>
                    <br />
                    <Typography variant="h6" color="textSecondary">Invoice ID: {this.props.invoice.id}</Typography>
                    <Typography variant="h6" color="textSecondary">Amount due: ${this.props.invoice.amount}</Typography>
                    <Typography variant="h6" color="textSecondary">Due date: {this.props.invoice.due_date}</Typography>
                    <br />
                    {this.renderMarkAsPaidButton()}
                    <br /><br />
                    {this.renderInquireButton()}
                    {this.renderMessageForm()}
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const InvoiceCard = connect(mapStateToProps, { markAsPaid })(_InvoiceCard);