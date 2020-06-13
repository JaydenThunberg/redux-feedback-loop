import React, {Component} from 'react';
import {Button, TextField } from '@material-ui/core/';

class Comments extends Component{
    state = {
        comments: ''
    } //end state

    submitComments = () => {
        console.log('submitComments:', this.state.comments);
        this.props.history.push('/comments')
    }//end submitComments

    handleComments = (event) => {
        this.setState({
            comments: event.target.value,
        })
        console.log('in handleComments');
    }// end handleComments
    
    render(){
        return(
            <div>
                <h2>Any additional comments or concerns can be entered here.</h2>
                <TextField color="secondary" label="Comments?" value={this.state.comments} onChange={this.handleComments}/>
                <br/>
                <br/>
                <Button size="small" variant="outlined" color="secondary" onClick={this.submitComments}>Next</Button>
            </div>
        )//end return
    }//end render
}//end class

export default Comments;