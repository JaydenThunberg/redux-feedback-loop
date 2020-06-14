import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Admin extends Component{
    

    goHome = () =>{
        console.log('in handleClick admin');
        this.props.history.push('/')
    } 

    render(){
        return(
            <div>
            <h2>Welcome to Admin</h2>

            <Button size="small"variant="contained" color="secondary" onClick={this.goHome}>Leave Admin</Button>
            </div>
        )//return
    }//render
}//class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Admin);

