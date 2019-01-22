import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { InvoiceForm } from "./invoiceform";
import { getClients } from '../state/actions/actions'
import { getMessagedUsers } from '../state/actions/actions'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { addClient } from '../state/actions/actions'
import { removeClient } from '../state/actions/actions'


class _Clients extends Component {

    state={
        showInvoiceForm: false,
        showAddClientButton: true
    }

    componentWillMount(){
        if(this.props.my_biz){
        this.props.getClients(this.props.my_biz.id)
        this.props.getMessagedUsers(this.props.user.id)
        }
    }

    renderInvoiceForm = (client) => {
        if (this.state.showInvoiceForm) {
            return <InvoiceForm billed_user_id={client[0].id} billed_user_name={client[0].name} />
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

    renderAddClientButton = (messaged_user) => {
        if(this.state.showAddClientButton){
            return <Button
                onClick={() => this.handleAddClientButtonClick(messaged_user.id)}
                fullWidth
                variant="contained"
                color="primary">
                Add Client
            </Button>
        }  
    }

    handleAddClientButtonClick = (client_user_id) => {
        this.setState({showAddClientButton: false})
        this.props.addClient({ client_user_id: client_user_id, business_id: this.props.my_biz.id })
    }

    renderRemoveClientButton = (client) => {
        return <Button
            onClick={() => this.props.removeClient(client[1])}
            fullWidth
            variant="contained"
            color="primary">
            Remove Client
                </Button>
    }


    renderSuggestedClients = () => {
        if(this.props.messaged_users && this.props.messaged_users.length > 0){
            return <>
            <br /><br />
                <Typography color="Primary" variant="h5">
                    Potential Clients
                    </Typography>
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.messaged_users.map((messaged_user) => {
                        return <Grid item xs >
                            <Card style={{ padding: 15, margin: 30, width: 300, maxHeight: 400 }} align="center">
                                <Typography color="primary" variant="h5">
                                    {messaged_user.name}
                                </Typography>
                                <br />
                                {this.renderAddClientButton(messaged_user)}
                            </Card>
                        </Grid>
                    }
                    )}
                </Grid>
            </>
        }
    }

    renderClientsList = () => {
        if (this.props.clients && (this.props.clients.length > 0)) {
            return <Paper style={{ padding: 40, margin: 30 }} align="center">
                <Typography color="Primary" variant="h4">
                    Your Clients
                    </Typography>
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.clients.map((client) => {
                        return <Grid item xs >
                            <Card style={{ padding: 15, margin: 30, width: 300, maxHeight: 400 }} align="center">
                                <Typography color="primary" variant="h5">
                                    {client[0].name}
                                </Typography>
                                <br />
                                {this.renderRemoveClientButton(client)}
                                <br /><br />
                                {this.renderInvoiceButton()}
                                {this.renderInvoiceForm(client)}
                            </Card>
                        </Grid>
                        }
                    )}
                </Grid>
                {this.renderSuggestedClients()}
            </Paper>
        }else{
            return <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="Primary" variant="h4">
                        You do not have any clients
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="h6">
                        You can add clients by their email, or you will be given the option to add anyone who has messaged you as a client.
                    </Typography>
                {this.renderSuggestedClients()}
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
    clients: state.clients,
    messaged_users: state.messaged_users
})

export const Clients = connect(mapStateToProps, {getClients, getMessagedUsers, addClient, removeClient} )(_Clients);