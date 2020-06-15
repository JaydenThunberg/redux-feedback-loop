import React, { Component } from "react";
import {Button} from '@material-ui/core/';
//use in main app to connect
//import Thanks from '../Thanks/Thanks';


class Thanks extends Component{

    handleHome = () => {
        console.log('go home')
        this.props.history.push('/')
    } //end handleHome


    render(){
        return(
            <div>
                <h1>Thank you for your Feedback!</h1>
                <br/>
                <br/>
                <Button size="small"variant="outlined" color="secondary" onClick={this.handleHome}>Submit New Feedback</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default Thanks;