import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, FormControl, MenuItem, Select } from '@material-ui/core/';

class Support extends Component{
    state = {
        support: ''
    } //end state

    submitSupport = () => {
        console.log('submitSupport:', this.state.support);
        if (this.state.support === '') {
            alert('Please select how you are support, then press Next. Thank you!');
            } else if (this.state.support > 0) {
            this.props.dispatch({
            type: 'NEW_SUPPORT',
            payload: this.state.support,
            })
            this.props.history.push('/comments')
            }
    }//end submitSupport

    handleSupport = (event) => {
        this.setState({
            support: event.target.value,
        })
        console.log('in handleSupport');
    }// end handleSupport

    previousButton = () => {
        console.log('previous page');
        this.props.history.push('/understanding')
    }//end previousButton

    render(){
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <br/>
                <FormControl variant="outlined" color="secondary">
                <Select value={this.state.support} onChange={this.handleSupport}>
                <MenuItem value=""><em>Support?</em></MenuItem>
                    <MenuItem value="5">Excellent</MenuItem>
                    <MenuItem value="4">Very Good</MenuItem>
                    <MenuItem value="3">Good</MenuItem>
                    <MenuItem value="2">Fair</MenuItem>
                    <MenuItem value="1">Poor</MenuItem>
                </Select>
                </FormControl>
                <br />
                <br />
                <Button size="small" variant="contained" color="secondary" onClick={this.previousButton}>Previous</Button>
                <Button size="small" variant="outlined" color="secondary" onClick={this.submitSupport}>Next</Button>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(Support);