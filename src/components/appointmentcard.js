import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { MessageForm } from './messageform'
import Button from '@material-ui/core/Button';


class _AppointmentCard extends Component {

    state = {
        showMessageForm: false
    }

    renderMessageButton = () => {
        if (!this.state.showMessageForm) {
            return <Button
                onClick={() => this.setState({ showMessageForm: true })}
                fullWidth
                variant="contained"
                color="primary">
                Contact
                </Button>
        }
    }

    renderMessageForm = () => {
        if (this.state.showMessageForm) {
            return <MessageForm prepend="Appointment Inquiry: " messaged_user_id={this.props.appointment[0].id} user_id={this.props.user.id} />
        }
    }

    render() {

        return (
            <Grid item xs >
                <Card elevation="15" style={{ padding: 15, margin: 15, width: 200, maxHeight: 300 }} align="center">
                    <Typography color="textSecondary" variant="h6">
                        {this.props.appointment[0].name}
                        <br />
                        <Icon color="primary" style={{ fontSize: 40 }}>perm_contact_calendar</Icon>
                        <br />
                        {this.props.appointment[1].date}
                    </Typography>
                    {this.renderMessageButton()}
                    {this.renderMessageForm()}
                </Card>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.my_biz
})

export const AppointmentCard = connect(mapStateToProps)(_AppointmentCard);