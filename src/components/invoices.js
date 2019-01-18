import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { InvoiceCard } from './messagecard'
import { connect } from 'react-redux'
import { getInvoices } from '../state/actions/actions' //make this


class Invoices extends Component {

    //ON BACK END, SEPARATE INVOICES INTO SENT AND RECEIVED. USE MESSAGES CUSTOM ROUTES

    //HAVE A MY_BIZ STORE STATE ITEM, IF IT EXISTS AND
    //HAS CLIENTS, RENDER FORM THAT ALLOWS USER TO BILL THEIR CLIENTS

    // generateInvoiceCards = (invoice) => {
    //     if (this.props.invoices) {
    //         return this.props.invoices.map((invoice) => (
    //             <Grid item xs={12} sm={6} lg={4} xl={3}>
    //                 <InvoiceCard {/* whatever props will be needed */} />
    //             </Grid>
    //         ))
    //     }
    // }

    // renderInvoiceForm = () => {
    //     has appropriate fields for sending an invoice to associated clients
    // }

    render() {

        return (
            <div>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="textSecondary" variant="h7">
                    These are your invoices
                    </Typography>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {/* {this.generateInvoiceCards(received_invoices)} */}
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            HELLA INVOICE CARDS HERE
                            these cards will need a button to mark as paid. make patch to backend
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="textSecondary" variant="h7">
                        These ARE INVOICES YOU HAVE SENT
                    </Typography>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {/* {this.generateInvoiceCards(sent_invoices)} */}
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            HELLA INVOICE CARDS HERE
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}


export default Invoices;