import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Invoices from "./invoices";
import Grid from '@material-ui/core/Grid';
import { getInvoices } from '../state/actions/actions'
import { getMyBiz } from '../state/actions/actions'
import { BizCard } from "./bizcard";
import { BizForm } from "./bizform";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { NavBar } from './navbar'
import { getClients } from '../state/actions/actions'
import { InvoiceForm } from "./invoiceform";
import Card from '@material-ui/core/Card';


class _MyBiz extends Component {

    state={
        showInvoiceForm: false,
        billed_user_id: '',
        billed_user_name: ''
    }

    componentWillMount(){
        this.props.getMyBiz(this.props.user.id)
        this.props.getInvoices(this.props.user.id)
        this.props.getClients(this.props.my_biz.id)

    }

    renderBizCard = () => {
        if(this.props.my_biz){
            return <BizCard biz={this.props.my_biz} />
        }
    }
//WOKING HERE
    renderInvoiceForm = () => {
        if(this.state.showInvoiceForm){
           return <InvoiceForm billed_user_id={this.state.billed_user_id} billed_user_name={this.state.billed_user_name}/>
        }
    }

    handleInvoiceOnClick = (client) => {
        this.setState({ billed_user_id: client.id })
        this.setState({ billed_user_name: client.name })
        this.setState({ showInvoiceForm: true})
    }
//WOKING HERE
    renderBizForm = () => {
        if (this.props.my_biz) {
            return <BizForm biz={this.props.my_biz} />
        }else{
            return <BizForm />
        }
    }

    renderClientsList = () => {
        if (this.props.clients) {
            return <Paper style={{ padding: 40, margin: 30 }} align="center">
                <Typography color="Primary" variant="h4">
                    Your Clients
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                    {this.props.clients.map((client) => {
                        return <><Grid item xs >
                            <Card style={{ padding: 15, margin: 30, width: 300, maxHeight: 400}} align="center">
                                <Typography color="textSecondary" variant="h6">
                                    {client.name}
                                </Typography>
                                <br />
                                <Button
                                    onClick={client => this.handleInvoiceOnClick(client)}
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                    Invoice This Client
                                </Button>
                            </Card>
                        </Grid>
                        </>
                        }
                    )}
                </Grid>
                {this.renderInvoiceForm()}
            </Paper>
        }
    }

    render() {

        return (
            <div>
                <NavBar />
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <br />
                    <Typography color="Primary" variant="h4">
                        Your Itty Bizzy
                    </Typography><br />
                    {this.renderBizCard()}
                </Paper>
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                    <Typography color="Primary" variant="h4">
                        Edit/Create
                    </Typography>
                    {this.renderBizForm()}
                </Paper>
                <Invoices currentUser={this.props.user} sent_invoices={this.props.sent_invoices}/>
                {this.renderClientsList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    my_biz: state.myBiz,
    sent_invoices: state.sent_invoices,
    clients: state.clients
})

export const MyBiz = connect(mapStateToProps, {getMyBiz, getInvoices, getClients})(_MyBiz);