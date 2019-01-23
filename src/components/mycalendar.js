import React, { Component } from 'react';
import Calendar from 'react-calendar'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { getAppointments } from '../state/actions/actions'
import Grid from '@material-ui/core/Grid';
import { AppointmentCard } from './appointmentcard';
import { AppointmentForm } from './appointmentform';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

class _MyCalendar extends Component {

    state = {
        date: new Date()
    }

    componentWillMount(){
        if(this.props.my_biz){
            this.props.getAppointments(this.props.my_biz.id)
        }
    }

    selectedDate = () => {
        let selectedDate;
        if ((this.state.date.getMonth().toString().length === 1) && (this.state.date.getDate().toString().length === 1) ){
            selectedDate = `0${this.state.date.getMonth() + 1}/0${this.state.date.getDate()}/${this.state.date.getFullYear()}`
        } else if (this.state.date.getMonth().toString().length === 1){
            selectedDate = `0${this.state.date.getMonth() + 1}/${this.state.date.getDate()}/${this.state.date.getFullYear()}`
        } else if (this.state.date.getDate().toString().length === 1) {
            selectedDate = `${this.state.date.getMonth() + 1}/0${this.state.date.getDate()}/${this.state.date.getFullYear()}`
        }
        return selectedDate;
    }

    onChange = date => {
        this.setState({date})
    }

    mapAppointmentsToDate = () => {
        const filteredAppointments = this.props.appointments.filter(appt => (appt[1].date === this.selectedDate()))
        if(filteredAppointments.length > 0){
        return filteredAppointments.map(appt => (<AppointmentCard appointment={appt}/>))
        }else{
            return <Typography color="textSecondary" variant="h6" align="center">
                You have no appointments for this day
                </Typography>
        }
    }

    renderAppointmentsNext7Days = () => {
        return this.props.appointments.map(appt => (<AppointmentCard appointment={appt} />))
    }

    render() {
        return (
            <div>
                <Paper elevation="5" style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="primary" variant="h4" align="center">
                        Your Calendar
                    </Typography>
                    <br />
                    <Icon color="primary" style={{ fontSize: 60 }}>date_range</Icon>
                    <br />
                    <br />
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        <Grid item xs >
                            <Card elevation="10" style={{ padding: 17, margin: 30, width: 400, height: 400 }} align="center">
                                <Typography color="primary" variant="h6" align="center">
                                    Click a date to see your appointments<br />or to schedule an appointment
                                </Typography>
                                <br />
                                <Calendar
                                    minDate={new Date()}
                                    maxDetail="month"
                                    minDetail="month"
                                    onChange={this.onChange}
                                    value={this.state.date}
                                /><br />
                                <Typography color="textSecondary" variant="h6" align="center">
                                    Selected date: {this.state.date.getMonth() + 1}/{this.state.date.getDate()}/{this.state.date.getFullYear()}
                                    <br /><br />
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs >
                            <AppointmentForm date={this.selectedDate()} />
                        </Grid>
                    </Grid>
                    <Typography color="primary" variant="h5" align="center">
                        Appointments for {this.selectedDate()}
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.mapAppointmentsToDate()}
                    </Grid>
                </Paper>
                <Paper elevation="5" style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="Primary" variant="h4">
                        Appointments in the next week
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.renderAppointmentsNext7Days()}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.my_biz,
    clients: state.clients,
    messaged_users: state.messaged_users,
    appointments: state.appointments
})

export const MyCalendar = connect(mapStateToProps, {getAppointments})(_MyCalendar);