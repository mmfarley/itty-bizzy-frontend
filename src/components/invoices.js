import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { InvoiceCard } from './invoicecard'


class Invoices extends Component {


    generateInvoiceCards = (invoices) => {
        return invoices.map((invoice) => (
            <Grid item xs>
                <InvoiceCard invoice={invoice}/>
            </Grid>
        ))
    }

    invoiceHeaderType = () => {
        if (this.props.sent_invoices){
            return "Invoices you have sent"
        } else if (this.props.received_invoices){
            return "Your Invoices"
        }else{
            return "You have no invoices"
        }
    }

    renderInvoices = () => {
        if (this.props.sent_invoices) {
            return this.generateInvoiceCards(this.props.sent_invoices)
        } else if (this.props.received_invoices) {
            return this.generateInvoiceCards(this.props.received_invoices)
        }
    }

    render() {

        return (
            <div>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="primary" variant="h4">
                    {this.invoiceHeaderType()}
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.renderInvoices()}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default Invoices;
