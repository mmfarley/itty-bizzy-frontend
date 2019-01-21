import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBiz } from '../state/actions/actions'
import { makeBiz } from '../state/actions/actions'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


class _BizForm extends Component {

    state = {
        name: '',
        description: '',
        hourly_rate: '',
        service_type: '',
        user_id: this.props.user.id
    }

    componentWillMount() {
        if (this.props.my_biz) {
            this.setState({
                name: this.props.my_biz.name,
                description: this.props.my_biz.description,
                hourly_rate: this.props.my_biz.hourly_rate,
                service_type: this.props.my_biz.service_type
            })
        }
    }


    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        
    }


    render() {

        return (
            <form onSubmit={e => this.handleOnSubmit(e)}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="name">Name of your Itty Bizzy</InputLabel>
                    <Input onChange={this.handleOnChange} id="name" name="name" value={this.state.name} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="service_type">Service Type</InputLabel>
                    <Input onChange={this.handleOnChange} id="service_type" name="service_type" value={this.state.service_type} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="hourly_rate">Hourly Rate</InputLabel>
                    <Input onChange={this.handleOnChange} name="hourly_rate" type="hourly_rate" value={this.state.hourly_rate} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={this.handleOnChange}
                        multiline
                        label="Description *"
                        margin="normal"
                        value={this.state.description}
                        name="description"
                         />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Done
                </Button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export const BizForm = connect(mapStateToProps, { editBiz, makeBiz })(_BizForm);