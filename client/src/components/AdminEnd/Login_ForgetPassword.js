import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class LoginForget extends Component {
    constructor(props){
        super(props);
        this.state={username:" "};
      this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({username:event.target.value});
       
    }
     handleSubmit(event){
         if(this.state.username!="")
     this.props.handleSignInForget(this.state.username);
         alert(this.props.status);
 
    }
    
    render() {
  var errorMessage = (this.props.status != undefined && this.props.status=="NOT FOUND") ? "Username is not found in database" :""
        return (
          <div>
            <center>
            <h1>Forget Password</h1>
      <p style={{color:'red'}}>{errorMessage}</p>
 <TextField  id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username}  placeholder="enter email here"
          label="email"  type="email" /><br /><br />
            <Button variant="contained" color="primary" onClick={this.handleSubmit} type="submit">Send Email</Button>
            </center>
          </div>
        );
    }
}

export default LoginForget;
