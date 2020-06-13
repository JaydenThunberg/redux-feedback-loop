import React, { Component } from "react";
import {connect} from 'react-redux';
import { Button, FormControl, MenuItem, Select } from '@material-ui/core/';

class Feeling extends Component {
    state = {
        feeling: ''
    } //end state

    submitFeeling = () => {
        console.log('submitFeeling:', this.state.feeling);
        if (this.state.feeling === '') {
        alert('Please select how you are feeling, then press Next. Thank you!');
        } else if (this.state.feeling > 0) {
        this.props.dispatch({
        type: 'NEW_FEELING',
        payload: this.state.feeling,
        })
        this.props.history.push('/understanding')
        }

        // this.props.history.push('/understanding')
    }//end submitFeeling

    handleFeeling = (event) => {
        this.setState({
            feeling: event.target.value,
        })
        console.log('in handleFeeling feeling');
    }// end handleFeeling



    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <br />
                <FormControl variant="outlined" color="secondary">
                    <Select value={this.state.feeling} onChange={this.handleFeeling}>
                        <MenuItem value=""><em>Feeling?</em></MenuItem>
                        <MenuItem value="5">Excellent</MenuItem>
                        <MenuItem value="4">Very Good</MenuItem>
                        <MenuItem value="3">Good</MenuItem>
                        <MenuItem value="2">Fair</MenuItem>
                        <MenuItem value="1">Poor</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />
                <Button size="small" variant="outlined" color="secondary" onClick={this.submitFeeling}>Next</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default connect()(Feeling);