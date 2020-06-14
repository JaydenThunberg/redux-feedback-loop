import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Admin extends Component{
    state = {
        feedback: []
      }

      componentDidMount(){
          console.log('componentDidMount')
          this.getFeedbacK();
      }//end component
    
      getFeedbacK() {
        console.log('in GET feedback')
        axios.get('/feedback/admin')
          .then((response) => {
            console.log('GET feedback:', response.data);
            this.setState({
              feedback: response.data
            })
          })
          .catch((error) => {
            console.log('error with GET:', error);
            alert('error getting admin feedback. Sorry, try again later.')
          })
      }//end getFeedback

    goHome = () =>{
        console.log('in handleClick admin');
        this.props.history.push('/')
    }//end goHome

    render(){
        return(
            <div>
            <h2>Welcome to Admin</h2>
            {JSON.stringify(this.state.feedback)} // map through this to get on table
            <Button size="small"variant="contained" color="secondary" onClick={this.goHome}>Leave Admin</Button>
            </div>
        )//end return
    }//end render
}//end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Admin);

