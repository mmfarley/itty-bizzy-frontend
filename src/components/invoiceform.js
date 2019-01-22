import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBiz } from '../state/actions/actions'
import { makeBiz } from '../state/actions/actions'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { sendInvoice } from '../state/actions/actions'


class _InvoiceForm extends Component {

    state = {
        billed_user_id: this.props.billed_user_id,
        user_id: this.props.user.id,
        amount: '',
        due_date: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
//WORKING HERE
    handleOnSubmit = e => {
        e.preventDefault()
       this.props.sendInvoice(this.state)
       this.setState({ amount: '', due_date: ''})
       this.props.showInvoiceFormFalse()
    }


    render() {
        return (
            <div>
                <form onSubmit={e => this.handleOnSubmit(e)}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input onChange={this.handleOnChange} id="amount" name="amount" value={this.state.amount} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="due_date">Due Date (mm/dd/yyyy)</InputLabel>
                        <Input onChange={this.handleOnChange} name="due_date" type="due_date" value={this.state.due_date} />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Send Invoice
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const InvoiceForm = connect(mapStateToProps, { editBiz, makeBiz, sendInvoice })(_InvoiceForm);