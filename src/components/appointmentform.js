import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { setAppointment } from '../state/actions/actions'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


class _AppointmentForm extends Component {

    state = {
        
        appointment_user_id: '',
        business_id: this.props.my_biz.id,
        anchorEl: null,
        appointment_name: ''
        
    }

    handleClick = e => {
        this.setState({ anchorEl: e.currentTarget });
    };

    handleClose = (e, name) => {
        this.setState({ anchorEl: null });
        this.setState({ appointment_user_id: e.currentTarget.value})
        if(name !== "backdropClick"){
            this.setState({ appointment_name: name })
        }
    };

    renderSelectedClientName = () => {
        if(this.state.appointment_name !== ''){
            return <Typography color="primary" variant="h6" align="center">
                Selected Client: {this.state.appointment_name}
            </Typography>
        }
    }


    handleOnSubmit = e => {
        e.preventDefault()
        this.props.setAppointment(this.state.appointment_user_id, this.state.business_id, this.props.date)
        this.setState({appointment_user_id: ''})
        this.setState({ appointment_name: '' })
    }

   generateMenuOptions = () => {
       if(this.props.clients){
       return this.props.clients.map(client => (<MenuItem value={client[0].id} props={client[0].name} onClick={(e) => this.handleClose(e, client[0].name)}>{client[0].name}</MenuItem>))
       }
   }

    render() {
        console.log(this.props.date)
        return (
            <div>
                <Card elevation="10" style={{ padding: 30, margin: 30, width: 400, height: 400 }} align="center">
                    <Typography color="primary" variant="h5" align="center">
                        Schedule an Appointment
                    </Typography>
                    <br />
                    <Icon color="primary" style={{ fontSize: 40 }}>date_range</Icon>
                    <br /><br />
                    <Button
                        aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >
                        Select a Client
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        {this.generateMenuOptions()}
                    </Menu>
                        <br /><br />
                    {this.renderSelectedClientName()}
                    <form onSubmit={e => this.handleOnSubmit(e)}>
                        <FormControl margin="normal" required fullWidth>
                            <TextField
                                margin="normal"
                                label="Selected Date"
                                value={this.props.date}
                                name="date"/>
                        </FormControl>
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Set Appointment
                        </Button>
                    
                    </form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    clients: state.clients,
    my_biz: state.my_biz
})

export const AppointmentForm = connect(mapStateToProps, {setAppointment})(_AppointmentForm);