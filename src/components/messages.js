import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MessageCard } from './messagecard'
import { connect } from 'react-redux'
import { getConversations } from '../state/actions/actions'
import Icon from '@material-ui/core/Icon';
import { NavBar } from './navbar'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

class _Messages extends Component {

    state = {
        search: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillMount() {
        this.props.getConversations(this.props.user.id)  
    }

    componentDidMount() {
        this.fetchNewMessages()
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    fetchNewMessages = () => {
       this.interval = setInterval(()=>this.props.getConversations(this.props.user.id), 1000)
    }

    generateMessageCards = () => {
        if (this.props.conversations){
        return this.props.conversations.map((conversation) => {
            if (conversation.messaged_user.name.toLowerCase().includes(this.state.search.toLowerCase())){
            return <Grid item >
                <MessageCard conversation={conversation.conversation} messaged_user={conversation.messaged_user}/>
            </Grid>
            }
        })}
    }

    render() {
        return (
            <div>
                <NavBar />
                <Paper elevation="24" style={{ padding: 40, margin: 100 }} align="center">
                    <br />
                    <Typography color="primary" variant="h4">Messages</Typography><br /><br />
                    <Icon color="primary" style={{ fontSize: 60 }}>forum</Icon><br /><br />
                    <FormControl margin="normal">
                        <TextField
                            onChange={this.handleOnChange}
                            margin="normal"
                            value={this.state.search}
                            name="search"
                            placeholder="Search"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon color="primary">search</Icon>
                                    </InputAdornment>
                                )
                            }} />
                    </FormControl>
                    <br />
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.generateMessageCards()}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    conversations: state.conversations,
    user: state.currentUser,
    my_biz: state.my_biz
})

export const Messages = connect(mapStateToProps, { getConversations })(_Messages);
