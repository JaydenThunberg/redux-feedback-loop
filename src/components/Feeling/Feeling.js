import React, { Component } from "react";
import { Button, FormControl, MenuItem, Select } from '@material-ui/core/';

class Feeling extends Component {
    state = {
        feeling: ''
    } //end state

    submitFeeling = () => {
        console.log('submitFeeling:', this.state.feeling);
        this.props.history.push('/understanding')
    }//end handle click

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
                <br/>
                <FormControl>
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

export default Feeling;