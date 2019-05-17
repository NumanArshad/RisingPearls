import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo.png';
import { withRouter } from 'react-router-dom';
import ResponsiveDrawer from './remporaryDrawer'

class LoginForm extends React.Component {
constructor(props) {
        super(props);
      this.state = {username:'',password:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
              this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }
 handleSubmit(event) {
       // event.preventDefault();
        alert(this.props.memberId)
        if(this.props.memberId==undefined){
        this.props.handleSignIn(this.state.username,this.state.password,this.props.memberId,true);
        }
        else if(this.props.memberId!==undefined){
            this.props.handleSignIn(this.state.username,this.state.password,this.props.memberId,false);

        }
     }


 handleSubmit2(event) {
        event.preventDefault();
this.props.handleForgetClick();
    }

    render() {
          var errorMessage = (this.props.status != undefined && this.props.status=="LOGIN_ACCOUNT_NOT_AUTHORIZED") ? "Username or password is incorrect" :""

        return (
            <div>
{/* <ResponsiveDrawer /> */}
                    <center>
                   <img src={Logo} style={{width:'300px'}}/>
            <Typography color="inherit" variant="display1">Online Examination Redefined</Typography>
            <br />
               <Typography color="primary" variant="title">Welcome! Sign in your Account </Typography>
                    <p style={{color: 'red'}}>{errorMessage}</p>
              <TextField   id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username}  placeholder="enter email here"
          label="Email"  type="text" margin="normal" /><br />
                  <TextField    id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password}placeholder="enter password here"
          label="Password"  type="password"
          margin="normal" />
          <br />
          <Button variant="contained" style={{marginTop:10}} color="primary" onClick={this.handleSubmit} type="submit">Sign In</Button> 
          {/*   <Grid container spacing={8} style={{marginLeft:'60px',marginTop:'30px'}}> 
             <Grid item> <Button variant="contained" color="primary" onClick={this.handleSubmit} type="submit">Sign In</Button></Grid> <Grid item> 
            <Typography onClick={this.handleSubmit2} type="submit">Forget Password ?</Typography></Grid></Grid> */}
       </center> 
    </div>
        );
    }
}

export default withRouter(LoginForm);








