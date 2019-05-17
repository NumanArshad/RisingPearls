
import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFailure from './Login_Failure'
import Login_Loading from './Login_loading'
import Login_signIn from './Login_signIn'
import LoginSuccess from './Login_Success'
import { adminServer } from '../../server/AdminServer';
import { admin_Status } from '../../constants/AdminEnd';
import { admin_Actions } from '../../constants/AdminEnd';
import LoginForget from  './Login_ForgetPassword';

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    admin_status: state.admin_Reducer.admin_status,
    //userId:state.admin_Reducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
handleSignIn: (username,password,memberId) => { dispatch(adminServer.handleSignIn(username,password,memberId)) },

          handleSignInForget: (username) => { dispatch(adminServer.handleSignInForget(username)) },
    handleBackClick : () =>{ dispatch({ type: admin_Actions.admin_Show.NEW }) },
      handleForgetClick : () =>{ dispatch({ type: admin_Actions.admin_Show.FORGET }) },
       
  };
};

class AdminEndView extends Component {

  getScreen(status) {
      alert(status);
    console.log("I am from admin Component getScreen: " + status);
    switch (status) {
      case admin_Status.admin_Show.NEW:
     alert(this.props.match.params.adminId)
        return (
          <Login_signIn handleSignIn={this.props.handleSignIn} 
           adminId={this.props.match.params.adminId}
           />
        );
        break;
      case admin_Status.admin_Show.FAILURE:
        return (
          <LoginFailure />
        );
      break;

        case admin_Status.admin_Show.AUTHORIZED:
       // this.props.history.push('/todoView/'+this.props.userId);
       if(this.props.match.params.MemberId==undefined){
alert("admin admin");
this.props.history.push('/Admin')
       }
       else{
        this.props.history.push('/Announcement/'+this.props.match.params.MemberId)

       }
        // return (
        //   <LoginSuccess handleBackClick={this.props.handleBackClick} />
        // );
        break;
                  case admin_Status.admin_Show.FORGET:
        
 return (
       
            <LoginForget  handleSignInForget={this.props.handleSignInForget}   />
        );
        break;
                              case admin_Status.admin_Show.NOT_FOUND:
        
 
        return (
       
            <LoginForget status={status} handleSignInForget={this.props.handleSignInForget}   />
        );
        break;
        case admin_Status.admin_Show.NOT_AUTHORIZED:
          return (
           <Login_signIn status={status} handleSignIn={this.props.handleSignIn} handleForgetClick={this.props.handleForgetClick} 
           memberId={this.props.match.params.MemberId} />
       
          );
          break;
            
        case admin_Status.admin_Show.LOADING:
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
          {this.getScreen(this.props.admin_status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEndView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
