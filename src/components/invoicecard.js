import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class _InvoiceCard extends Component {

    state = {
        isPaid: this.props.invoice.isPaid,
        user_id: this.props.user.id,
        billed_user_id: this.props.billed_user.id
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnClick = () => {
        e.preventDefault()
        this.props.markAsPaid()
        this.setState({
            [isPaid]: true
        })
    }

    renderMarkAsPaidButton = () => {
        if(!this.state.isPaid && this.props.received){
            <Button
                onClick={() => this.handleOnClick}
                fullWidth
                variant="contained"
                color="primary">
                Mark As Paid
            </Button>
        }
    }

    render() {

        return (
            <div>
                <Typography color="textSecondary">
                    <Card style={{ padding: 15, margin: 30, maxWidth: 300, maxHeight: 400 }} align="center"> 
                    {/* this will be the invoice card */}
                    {/* {this.renderMarkAsPaidButton()} */}
                    </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const MessageCard = connect(mapStateToProps, { sendMessage })(_MessageCard);