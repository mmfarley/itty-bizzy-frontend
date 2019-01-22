import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { BizCard } from './bizcard'
import { NavBar } from './navbar'
import { getBizzys } from '../state/actions/actions'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

class _FindBiz extends Component {

    state={
        search: ''
    }

    componentWillMount(){
        this.props.getBizzys()
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //write function that takes in state 
        //when changed an filters by service_type

    }

    generateBizCards = () => {
        if (this.props.bizzys) {
            return this.props.bizzys.map((biz) => {
                if(biz.service_type.includes(this.state.search) || biz.name.includes(this.state.search)){
                return <BizCard biz={biz} />
                }
            })
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Paper style={{ padding: 40, margin: 30 }} align="center">
                <br />
                    <Typography color="primary" variant="h4">
                        Find an Itty Bizzy near you!
                    </Typography>
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
                    <Grid container direction="row" justify="center" alignItems="center" spacing={24} style={{ padding: 24 }} >
                        {this.generateBizCards()}
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    bizzys: state.bizzys
})

export const FindBiz = connect(mapStateToProps, {getBizzys})(_FindBiz);