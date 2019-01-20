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




class _MyBiz extends Component {

    componentWillMount(){
        this.props.getInvoices(this.props.user.id)
        this.props.getMyBiz(this.props.user.id)
    }

    // renderInvoiceForm = () => {
    //     has appropriate fields for sending an invoice to associated clients
    // }

    render() {

        // SEND DOWN APPROPRIATE PROPS FOR RENDERING AND SET STATE WITH THEM

        // IF NO PROPS ARE SENT, RENDER CREATE BUSINESS FORM SEGMENTS
        // REUSE THESE FORM SEGMENTS FOR EDITING BUISINESS

        // MAKE FUNCTION(S) THAT CHECKS TO SEE IF THE CURRENT USER MATCHES THE BIZ USER
        // IF THEY DO, RENDER FORMS BENEATH EACH SEGMENT TO EDIT BIZ

        //HAVE A MY_BIZ STORE STATE ITEM, IF IT EXISTS AND
        //HAS CLIENTS, RENDER FORM THAT ALLOWS USER TO BILL THEIR CLIENTS

        return (
            <div>

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
    my_biz: state.my_biz
})

export const MyBiz = connect(mapStateToProps, {editBiz, makeBiz, getMyBiz, getInvoices})(_MyBiz);