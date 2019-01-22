import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { InvoiceForm } from "./invoiceform";
import { getClients } from '../state/actions/actions'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

class _Clients extends Component {

    state={
        showInvoiceForm: false
    }

    componentWillMount(){
        if(this.props.my_biz){
        this.props.getClients(this.props.my_biz.id)
        }
    }

    renderInvoiceForm = (client) => {
        if (this.state.showInvoiceForm) {
            return <InvoiceForm billed_user_id={client.id} billed_user_name={client.name} />
        }
    }

    renderInvoiceButton = () => {
        if (!this.state.showInvoiceForm) {
            return <Button
                onClick={() => this.handleInvoiceOnClick()}
                fullWidth
                variant="contained"
                color="primary">
                Invoice This Client
                </Button>
        }
    }

    handleInvoiceOnClick = () => {
        this.setState({ showInvoiceForm: true })
    }

    renderClientsList = () => {
        if (this.props.clients) {
            return <Paper style={{ padding: 40, margin: 30 }} align="center">
                <Typography color="Primary" variant="h4">
                    Your Clients
                    </Typography>
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.clients.map((client) => {
                        return <Grid item xs >
                            <Card style={{ padding: 15, margin: 30, width: 300, maxHeight: 400 }} align="center">
                                <Typography color="primary" variant="h5">
                                    {client.name}
                                </Typography>
                                <br />
                                {this.renderInvoiceButton()}
                                {this.renderInvoiceForm(client)}
                            </Card>
                        </Grid>
                        }
                    )}
                </Grid>
            </Paper>
        }
    }

    render() {
       
        return (
            <div>
            {this.renderClientsList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.my_biz,
    clients: state.clients
})

export const Clients = connect(mapStateToProps, {getClients} )(_Clients);