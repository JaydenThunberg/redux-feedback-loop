import React, { Component } from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import {Button} from '@material-ui/core/';



class Overview extends Component{

    componentDidMount(){
        console.log('in overview')
    } // end componentDidMount 


    //POST route here
    submitFeedback = () => {
        console.log('in handleclick overview')
        axios.post('/feedback', this.props.reduxState)
        .then(() => {
            console.log('Submitted feedback: ', this.props.reduxState);
        })
        .catch((error) => {
            console.log('error with POST: ', error);
            alert('error submitting feedback Sorry, try again later.')
        })
        this.props.history.push('/thanks')
    } //end submitFeedback

    updateFeedback = (event) => {
        if(event === "feeling"){
            this.props.history.push('/feeling')
        }
        else if (event === "understanding") {
            this.props.history.push('/understanding')
        }
        else if (event === "support") {
            this.props.history.push('/support')
        }
        else if (event === "comments") {
            this.props.history.push('/comments')
        }
    } //end updateFeedback

    goToAdmin = () =>{
        console.log('go to admin')
        this.props.history.push('/admin')
    }//end goToAdmin

    render(){
        return(
            <div>
                <h2>Review Your Feedback Answers</h2>
                <p>You can change your answer to any question if you click the "Update" button, it will bring you back to that question.</p>
                <p>The scoring is as follows on a scale of 1-5: <br />
                <b>5 = Excellent</b> <br />
                <b>4 = Very Good</b> <br />
                <b>3 = Good</b> <br />
                <b>2 = Fair</b> <br />
                <b>1 = Poor</b> <br />
                </p>
                    <p>Feeling: {this.props.reduxState.feeling} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('feeling')}>Update</Button></p>
                    <p>Understanding: {this.props.reduxState.understanding} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('understanding')}>Update</Button></p>
                    <p>Support: {this.props.reduxState.support} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('support')}>Update</Button></p>
                    <p>Comments: {this.props.reduxState.comments} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('comments')}>Update</Button></p>
                <br/>
                <br/>
                <Button size="small" variant="outlined" color="secondary" onClick={this.goToAdmin}>ADMIN</Button>
                <Button size="small" variant="contained" color="secondary" onClick={this.submitFeedback}>SUBMIT</Button>
            </div>
        ) //end return
    } //end render
} //end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Overview);