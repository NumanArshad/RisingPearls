import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo.png';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {username:'',password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }
 handleSubmit(event) {
        this.props.handleRegister(this.state.username,this.state.password)
    }
  componentWillMount() {
        // custom rule will have name 'isPasswordMatch'
        // ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        //     if (value !== this.state.user.password) {
        //         return false;
        //     }
        //     return true;
        // });
    }

    render() {
        var errorMessage = (this.props.status != undefined && this.props.status=="REGISTER_EXISTING") ? "This username already exists" :""

        return (
            
            <div>

            <center>
    
            <img src={Logo} style={{width:'300px'}}/>
            <Typography color="inherit" variant="display1">Online Examination Redefined</Typography>
            <br />
               <Typography color="primary" variant="title">Welcome! Create a New Account </Typography>
              <p style={{color: 'red'}}>{errorMessage}</p>
<TextField   id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username}  placeholder="enter email here"
          label="Email"  type="text" margin="normal" /><br />
                <TextField    id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password}placeholder="enter password here"
          label="Password"  type="password"
          margin="normal" /><br /><br />
            <Button variant="contained" color="primary" onClick={this.handleSubmit} type="submit">SIGN UP</Button>
              </center>
                  </div>
        );
    }
}

export default Register
