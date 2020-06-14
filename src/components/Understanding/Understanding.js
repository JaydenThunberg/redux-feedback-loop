import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, MenuItem, Select } from '@material-ui/core/';

class Understanding extends Component{
    state = {
        understanding: ''
    } //end state

    submitUnderstanding = () => {
        console.log('submitUnderstanding:', this.state.understanding);
        if (this.state.understanding === '') {
            alert('Please select how you are understanding, then press Next. Thank you!');
            } else if (this.state.understanding > 0) {
            this.props.dispatch({
            type: 'NEW_UNDERSTANDING',
            payload: this.state.understanding,
            })
            this.props.history.push('/support')
            }
        // this.props.history.push('/support')
    }//end submitUnderstanding

    handleUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value,
        })
        console.log('in handleUnderstanding');
    }// end handleUnderstanding

    previousButton = () => {
        console.log('previous page');
        this.props.history.push('/feeling')
    }//end previousButton

    render(){
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <br/>
                <FormControl variant="outlined" color="secondary">
                <Select value={this.state.understanding} onChange={this.handleUnderstanding}>
                <MenuItem value=""><em>Understanding?</em></MenuItem>
                    <MenuItem value="5">Excellent</MenuItem>
                    <MenuItem value="4">Very Good</MenuItem>
                    <MenuItem value="3">Good</MenuItem>
                    <MenuItem value="2">Fair</MenuItem>
                    <MenuItem value="1">Poor</MenuItem>
                </Select>
                </FormControl>
                <br />
                <br />
                <Button size="small" variant="outlined" color="secondary" onClick={this.previousButton}>Previous</Button>
                <Button size="small" variant="contained" color="secondary" onClick={this.submitUnderstanding}>Next</Button>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(Understanding);