import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import { MessageForm } from './messageform'
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';


class _BizCard extends Component {

    //pass down the biz as props

    state={
        showMessageForm: false
    }

    handleInquireOnClick = () => {
        this.setState({ showMessageForm: true })
    }

    renderInquireButton = () => {
        if ((this.props.biz.user_id != this.props.user.id) && !this.state.showMessageForm) {
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
        if ((this.props.biz.user_id != this.props.user.id) && this.state.showMessageForm) {
            return <MessageForm user_id={this.props.user.id} messaged_user_id={this.props.biz.user_id} />
        }
    }


    render() {

        return (
            <Grid item xs >
                <Card style={{ padding: 15, margin: 30, width: 350, maxHeight: 600, "overflow-y": 'auto' }} align="center">
                    <CardContent >
                        <Typography variant="h6" color="primary">Itty Bizzy: <br /> {this.props.biz.name}</Typography><br />
                        <Icon color="primary" style={{ fontSize: 60 }}>store</Icon><br /><br />
                        <Typography variant="h6" color="textSecondary">My Service: {this.props.biz.service_type}</Typography><br />
                        <Typography variant="h6" color="textSecondary">Rate: ${this.props.biz.hourly_rate}/hour</Typography><br />
                        <Typography paragraph variant="h6" color="textSecondary">About Me: {this.props.biz.description}</Typography>
                        {this.renderInquireButton()}
                        {this.renderMessageForm()}
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const BizCard = connect(mapStateToProps)(_BizCard);