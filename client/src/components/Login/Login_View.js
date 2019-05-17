
import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFailure from './Login_Failure'
import Login_Loading from './Login_loading'
import Login_signIn from './Login_signIn'
import LoginSuccess from './Login_Success'
import { loginServer } from '../../server/LoginServer';
import { login_Status } from '../../constants/Login';
import { login_Actions } from '../../constants/Login';
import LoginForget from  './Login_ForgetPassword';

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    login_status: state.login_Reducer.login_status,
    loginuser:state.login_Reducer.loginuser
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
handleSignIn: (username,password,memberId,isAdmin) => { dispatch(loginServer.handleSignIn(username,password,memberId,isAdmin)) },

          handleSignInForget: (username) => { dispatch(loginServer.handleSignInForget(username)) },
    handleBackClick : () =>{ dispatch({ type: login_Actions.login_SignIn.NEW }) },
      handleForgetClick : () =>{ dispatch({ type: login_Actions.login_SignIn.FORGET }) },
       
  };
};

class LoginView extends Component {

  getScreen(status) {
      alert(status);
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case login_Status.login_SignIn.NEW:
      alert(this.props.match.params.MemberId)
        return (
          <Login_signIn handleSignIn={this.props.handleSignIn} 
           login_status={this.props.login_status}  handleForgetClick={this.props.handleForgetClick}
          memberId={this.props.match.params.MemberId}
           />
        );
        break;
      case login_Status.login_SignIn.FAILURE:
        return (
          <LoginFailure />
        );
      break;

        case login_Status.login_SignIn.AUTHORIZED:
       // this.props.history.push('/todoView/'+this.props.userId);
       if(this.props.match.params.MemberId==undefined && this.props.loginuser.isAdmin){
alert("admin login");
this.props.history.push('/Admin/'+this.props.loginuser._id)
       }
       else{
        this.props.history.push('/Announcement/'+this.props.match.params.MemberId)

       }
        // return (
        //   <LoginSuccess handleBackClick={this.props.handleBackClick} />
        // );
        break;
                  case login_Status.login_SignIn.FORGET:
        
 return (
       
            <LoginForget  handleSignInForget={this.props.handleSignInForget}   />
        );
        break;
                              case login_Status.login_SignIn.NOT_FOUND:
        
 
        return (
       
            <LoginForget status={status} handleSignInForget={this.props.handleSignInForget}   />
        );
        break;
        case login_Status.login_SignIn.NOT_AUTHORIZED:
          return (
           <Login_signIn status={status} handleSignIn={this.props.handleSignIn} handleForgetClick={this.props.handleForgetClick} 
           memberId={this.props.match.params.MemberId} />
       
          );
          break;
            
        case login_Status.login_SignIn.LOADING:
          return (
            <Login_Loading />
          );
          break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.login_status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
