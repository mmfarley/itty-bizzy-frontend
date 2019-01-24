import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { InvoiceCard } from './invoicecard'
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';

class _Invoices extends Component {

    generateInvoiceCards = (invoices) => {
        return invoices.map((invoice) => (
            <Grid item >
                <InvoiceCard invoice={invoice}/>
            </Grid>
        ))
    }

    invoiceHeaderType = () => {
        if (this.props.sent_invoices){
            return "Unpaid Invoices"
        } else if (this.props.received_invoices){
            return "Your Invoices"
        }
    }

    renderInvoices = () => {
        if (this.props.sent_invoices) {
            return this.generateInvoiceCards(this.props.sent_invoices)
        } else if (this.props.received_invoices) {
            return this.generateInvoiceCards(this.props.received_invoices)
        }
    }

    showInvoices = () => {
        if (this.props.sent_invoices || this.props.received_invoices){
           return <Paper elevation="24" style={{ padding: 40, margin: 120 }} align="center">
                <Typography color="primary" variant="h4">
                    {this.invoiceHeaderType()}
                </Typography>
                <br />
                <Icon color="primary" style={{ fontSize: 50 }}>receipt</Icon>
                <br />
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.renderInvoices()}
                </Grid>
            </Paper>
        }
    }

    render() {

        return (
            <div>
                {this.showInvoices()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const Invoices = connect(mapStateToProps)(_Invoices);
