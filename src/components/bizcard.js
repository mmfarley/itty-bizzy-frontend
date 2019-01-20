import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { markAsPaid } from '../state/actions/actions'
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import { MessageForm } from './messageform'


class _BizCard extends Component {

    state={
        showMessageForm: false
    }

    handleInquireOnClick = () => {
        this.setState({ showMessageForm: true })
    }

    renderInquireButton = () => {
        if (!this.state.showMessageForm) {
            return <><Button
                onClick={() => this.handleInquireOnClick()}
                fullWidth
                variant="contained"
                color="primary">
                Inquire about this Itty Bizzy
            </Button></>
        }
    }

    renderMessageForm = () => {
        // if ((this.props.Biz.billed_user_id == this.props.user.id) && this.state.showMessageForm) {
        //     return <MessageForm user_id={this.props.Biz.billed_user_id} messaged_user_id={this.props.Biz.user_id} />
        // } else if ((this.props.Biz.user_id == this.props.user.id) && this.state.showMessageForm) {
        //     return <MessageForm user_id={this.props.Biz.user_id} messaged_user_id={this.props.Biz.billed_user_id} />
        // }
    }


    render() {

        return (
            <Card style={{ padding: 15, margin: 30, maxWidth: 300, maxHeight: 400 }} align="center">
                <CardContent>
                    THIS GON BE A BIZ SEARCH CARD. SHIT GON TAKE PROPS
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const BizCard = connect(mapStateToProps, { markAsPaid })(_BizCard);