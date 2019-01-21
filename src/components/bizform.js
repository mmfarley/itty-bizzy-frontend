import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBiz } from '../state/actions/actions'
import { makeBiz } from '../state/actions/actions'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class _BizForm extends Component {

    state = {
        name: '',
        description: '',
        hourly_rate: '',
        service_type: '',
        user_id: this.props.user.id
    }

    componentDidMount() {
        if (this.props.biz) {
            console.log("inside compontdidmount in bizform")
            this.setState({
                name: this.props.biz.name,
                description: this.props.biz.description,
                hourly_rate: this.props.biz.hourly_rate,
                service_type: this.props.biz.service_type
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
        if(this.props.biz){
            this.props.editBiz({...this.state, id: this.props.biz.id})
        }else{
            this.props.makeBiz(this.state)
        }
        
    }

    editOrCreate = () => {
        if(this.props.biz){
            return "Edit your Itty Bizzy"
        }else{
            return "Create your Itty Bizzy"
        }
    }


    render() {
        return (
            <div>
                <Typography color="Primary" variant="h4">
                    {this.editOrCreate()}
                </Typography>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
    biz: state.my_biz
})

export const BizForm = connect(mapStateToProps, { editBiz, makeBiz })(_BizForm);