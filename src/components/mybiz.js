import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Invoices from "./invoices";
import { getInvoices } from '../state/actions/actions'
import { getMyBiz } from '../state/actions/actions'
import { editBiz } from '../state/actions/actions'
import { makeBiz } from '../state/actions/actions'
import BizCard from "./bizcard";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { NavBar } from './navbar'


class _MyBiz extends Component {

    state = {
        name: '',
        description: '',
        hourly_rate: '',
        service_type: '',
        user_id: this.props.user.id
    }

    componentWillMount(){
        this.props.getInvoices(this.props.user.id)
        this.props.getMyBiz(this.props.user.id)
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.sendMessage(this.state)
        this.setState({
            content: ''
        })
    }

    // renderInvoiceForm = () => {
    //     has appropriate fields for sending an invoice to associated clients
    // }

    renderBizForm = () => {
        return <>
            <form onSubmit={e => this.handleOnSubmit(e)}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="name">Name of your Itty Bizzy</InputLabel>
                    <Input onChange={this.handleOnChange} id="name" name="name" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="service_type">Service Type</InputLabel>
                    <Input onChange={this.handleOnChange} id="service_type" name="service_type" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="hourly_rate">Hourly Rate</InputLabel>
                    <Input onChange={this.handleOnChange} name="hourly_rate" type="hourly_rate"/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <TextField
                        onChange={this.handleOnChange}
                        multiline
                        margin="normal"
                        value={this.state.description}
                        name="description"
                        variant="outlined" />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Submit Itty Bizzy
                </Button>
            </form>
        </>
    }

    render() {

        // IF NO PROPS ARE SENT, RENDER CREATE BUSINESS FORM SEGMENTS
        // REUSE THESE FORM SEGMENTS FOR EDITING BUISINESS

        // MAKE FUNCTION(S) THAT CHECKS TO SEE IF THE CURRENT USER MATCHES THE BIZ USER
        // IF THEY DO, RENDER FORMS BENEATH EACH SEGMENT TO EDIT BIZ

        //HAVE A MY_BIZ STORE STATE ITEM, IF IT EXISTS AND
        //HAS CLIENTS, RENDER FORM THAT ALLOWS USER TO BILL THEIR CLIENTS

        return (
            <div>
                <NavBar />
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="Primary" variant="h4">
                        Your Itty Bizzy
                    </Typography>
                    {/* <BizCard /> */}
                </Paper>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="textSecondary" variant="h7">
                        SEND DOWN APPROPRIATE PROPS FOR RENDERING AND SET STATE WITH THEM
                        <br /><br />
                        IF NO PROPS ARE SENT, RENDER CREATE BUSINESS FORM SEGMENTS<br />
                        REUSE THESE FORM SEGMENTS FOR EDITING BUISINESS<br /><br />

                        MAKE FUNCTION(S) THAT CHECKS TO SEE IF THE CURRENT USER MATCHES THE BIZ USER<br />
                        IF THEY DO, RENDER FORMS BENEATH EACH SEGMENT TO EDIT BIZ
                    </Typography>
                </Paper>
                <Invoices currentUser={this.props.user} sent_invoices={this.props.sent_invoices}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    sent_invoices: state.sent_invoices,
    my_biz: state.myBiz
})

export const MyBiz = connect(mapStateToProps, {editBiz, makeBiz, getMyBiz, getInvoices})(_MyBiz);