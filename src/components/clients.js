import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { getClients } from '../state/actions/actions'
import { getMessagedUsers } from '../state/actions/actions'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { addClient } from '../state/actions/actions'
import { ClientCard } from './clientcard'
import Icon from '@material-ui/core/Icon';


class _Clients extends Component {

    state={
        showAddClientButton: true
    }

    componentWillMount(){
        if(this.props.my_biz){
        this.props.getClients(this.props.my_biz.id)
        this.props.getMessagedUsers(this.props.user.id)
        }
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

    renderSuggestedClients = () => {
        if(this.props.messaged_users && this.props.messaged_users.length > 0){
            return <>
            <br /><br />
                <Typography color="Primary" variant="h4">
                    Potential Clients
                    </Typography>
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.messaged_users.map((messaged_user) => {
                        return <Grid item >
                            <Card elevation="15" style={{ padding: 15, margin: 30, width: 300, maxHeight: 400 }} align="center">
                                <Typography color="primary" variant="h5">
                                    {messaged_user.name}
                                </Typography>
                                <br />
                                <Icon color="primary" style={{ fontSize: 40 }}>mood</Icon>
                                <br /><br />
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
            return <Paper style={{ padding: 40, margin: 120 }} align="center">
                <Typography color="Primary" variant="h4">
                    Your Clients
                </Typography>
                <br />
                <Icon color="primary" style={{ fontSize: 60 }}>people</Icon>
                <br /><br />
                <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.clients.map((client) => (<ClientCard client={client} />))}
                </Grid>
                {this.renderSuggestedClients()}
            </Paper>
        }else{
            return <Paper style={{ padding: 40, margin: 100 }} align="center">
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

export const Clients = connect(mapStateToProps, {getClients, getMessagedUsers, addClient } )(_Clients);