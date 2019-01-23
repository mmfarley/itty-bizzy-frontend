import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { markAsPaid } from '../state/actions/actions'
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { InvoiceForm } from "./invoiceform";
import { removeClient } from '../state/actions/actions'
import Icon from '@material-ui/core/Icon';



class _ClientCard extends Component {

    state = {
        showInvoiceForm: false
    }

    renderInvoiceForm = (client) => {
        if (this.state.showInvoiceForm) {
            return <InvoiceForm showInvoiceFormFalse={() => this.showInvoiceFormFalse()} billed_user_id={client[0].id} billed_user_name={client[0].name} />
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

    showInvoiceFormFalse = () => {
        this.setState({ showInvoiceForm: false })
    }

    renderRemoveClientButton = (client) => {
        return <Button
            onClick={() => this.props.removeClient(client[1], this.props.my_biz.id)}
            fullWidth
            variant="contained"
            color="primary">
            Remove Client
                </Button>
    }

    render() {

        return (
            <Grid item xs >
                <Card elevation="15" style={{ padding: 15, margin: 30, width: 300, maxHeight: 400 }} align="center">
                    <Typography color="primary" variant="h4">
                        {this.props.client[0].name}
                    </Typography>
                    <br />
                    <Icon color="primary" style={{ fontSize: 60 }}>mood</Icon>
                    <br /><br />
                    {this.renderRemoveClientButton(this.props.client)}
                    <br /><br />
                    {this.renderInvoiceButton()}
                    {this.renderInvoiceForm(this.props.client)}
                </Card>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.my_biz,
    clients: state.clients,
    messaged_users: state.messaged_users
})

export const ClientCard = connect(mapStateToProps, { markAsPaid, removeClient })(_ClientCard);