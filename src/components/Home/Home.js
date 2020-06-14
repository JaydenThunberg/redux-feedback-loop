import React, { Component } from 'react';

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
                5 = Excellent <br />
                4 = Very Good <br />
                3 = Good <br />
                2 = Fair <br />
                1 = Poor <br />
                </p>

                <button onClick={this.beginQuestions}>Begin</button>
            </div>
        )//end return
    }//end render
}//end class

export default Home;