import React, { Component } from 'react';
import '../App.css';
import {MuiThemeProvider} from "@material-ui/core/styles";
import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
          username: '',
          password:''
      }
}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="Password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button variant="contained" label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
}
}

const style = {
    margin: 15,
   };

export default LoginScreen;