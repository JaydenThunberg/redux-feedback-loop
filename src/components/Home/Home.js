import React, { Component } from 'react';
import { Button } from '@material-ui/core';
class Home extends Component {
    beginQuestions = () => {
        console.log('beginning questions')
        this.props.history.push('/feeling')
    }//end beginQuestions

    render() {
        return (
            <div>
                <p> This is a feedback questionnaire. There will be four questions three of which can be
                answered with a drop down menu on the page. The fourth is an optional section for comments.
                Please press the 'next' button to begin.
                </p>

                <p>The scoring is as follows on a scale of 1-5: <br />
                <b>5 = Excellent</b> <br />
                <b>4 = Very Good</b> <br />
                <b>3 = Good</b> <br />
                <b>2 = Fair</b> <br />
                <b>1 = Poor</b> <br />
                </p>

                <Button variant="contained" color="secondary" onClick={this.beginQuestions}>Begin</Button>
            </div>
        )//end return
    }//end render
}//end class

export default Home;