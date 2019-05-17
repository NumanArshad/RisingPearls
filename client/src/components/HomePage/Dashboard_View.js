
import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardContainer from './Dashboard_Container';
import AboutUs from './AboutUsPage';
import AddMember from './AddMember'
import ShowMeetings from './ShowMeetings';
import ControlledExpansionPanels from './ExpansionPanel'
import ShowEventImages from  './ShowEventImages';
import { dashboardServer } from '../../server/HomePageServer';
import { dashboard_Status } from '../../constants/Dashboard';
import { dashboard_Actions } from '../../constants/Dashboard';


const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    dashboard_Status: state.dashboard_Reducer.dashboard_Status,
    memberList:state.dashboard_Reducer.memberList,
 
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleMemberList: () => { dispatch(dashboardServer.handleMemberList()) },
    handleAddMember: (imageURL,name,status,session,contact,dept,loginId,password) => 
    { dispatch(dashboardServer.handleAddMember(imageURL,name,status,session,contact,dept,loginId,password)) },

    //       handleSignInForget: (username) => { dispatch(loginServer.handleSignInForget(username)) },
    handleHomeClick : () =>{ dispatch({ type: dashboard_Actions.dashboard_Show.HomePage }) },
     handleAboutUsClick : () =>{ dispatch({ type: dashboard_Actions.dashboard_Show.ABOUTUS }) },
     handleAddMemberClick : () =>{ dispatch({ type: dashboard_Actions.dashboard_Show.ADDMEMBER }) },
    //  handleShowMeetingClick : () =>{ dispatch({ type: dashboard_Actions.dashboard_Show.SHOWMEETING }) },
    //  handleExpansionClick : () =>{ dispatch({ type: dashboard_Actions.dashboard_Show.EXPANSIONPANEL }) },
    //  handleShowEventImages:()=>{dispatch({type: dashboard_Actions.dashboard_Show.SHOWEVENTIMAGES})}


     
  };
};

class DashboardView extends Component {
  constructor(props){
    super(props);
    this.state={memberlist:this.props.memberList,meetingeventlist:this.props.meetingeventList}
  }
	componentWillReceiveProps(ItemsProps) {
		this.setState({memberlist:ItemsProps.memberList,meetingeventlist:ItemsProps.meetingeventList})
  }
  componentDidMount(){
    alert("admin mode is on"+this.props.match.params.adminId)
    if(this.props.match.params.adminId!=undefined){
      this.props.handleMemberList();
    }
  }
  getScreen(status) {
      alert(status);
    console.log("I am from Dashboard Component getScreen: " + status);
    switch (status) {
      case dashboard_Status.dashboard_Show.HomePage:
      // if(this.props.match.params.adminId==undefined){
        return (
          <DashboardContainer handleAboutUsClick={this.props.handleMemberList}  />
        );
      // }
      // else{
      //   alert("admin going to edit member")
      //   return (
      //     <AboutUs handleHomeClick={this.props.handleHomeClick}  memberlist={this.state.memberlist} />
      //   );
     // }
        break;
      case dashboard_Status.dashboard_Show.ABOUTUS:
      alert(this.state.memberlist.length+"about us");
        return (
          <AboutUs handleHomeClick={this.props.handleHomeClick}  memberlist={this.state.memberlist} 
          adminId={this.props.match.params.adminId} handleAddMemberClick={this.props.handleAddMemberClick} />
        );
      break;
      case dashboard_Status.dashboard_Show.ADDMEMBER:
      return (
        <AddMember handleHomeClick={this.props.handleHomeClick} handleShowMeetingClick={this.props.handleShowMeetingClick} 
        handleAddMember={this.props.handleAddMember}/>
        );
    break;
  //   case dashboard_Status.dashboard_Show.SHOWMEETING:
  //   return (
  //     <ShowMeetings handleHomeClick={this.props.handleHomeClick} meetingeventlist={this.state.meetingeventlist}
  //     />
  //   );
  // break;
  
//   case dashboard_Status.dashboard_Show.EXPANSIONPANEL:
//   return (
//     <ControlledExpansionPanels handleHomeClick={this.props.handleHomeClick} />
//   );
// break;

// case dashboard_Status.dashboard_Show.SHOWEVENTIMAGES:
// alert('last');
// return (
//   <ShowEventImages  />
// );
// break;
/*
       case dashboard_Status.dashboard_Show.AUTHORIZED:
        this.props.history.push('/todoView/'+this.props.userId);
        return (
          <LoginSuccess handleBackClick={this.props.handleBackClick} />
        );
        break;
                  case dashboard_Status.dashboard_Show.FORGET:
        
 return (
       
            <LoginForget  handleSignInForget={this.props.handleSignInForget}   />
        );
        break;
                              case dashboard_Status.dashboard_Show.NOT_FOUND:
        
 
        return (
       
            <LoginForget status={status} handleSignInForget={this.props.handleSignInForget}   />
        );
        break;
        case dashboard_Status.dashboard_Show.NOT_AUTHORIZED:
          return (
           <dashboard_Show status={status} handleSignIn={this.props.handleSignIn} handleForgetClick={this.props.handleForgetClick} />
       
          );
          break;
            
        case dashboard_Status.dashboard_Show.LOADING:
          return (
            <Login_Loading />
          );
          break;*/
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.dashboard_Status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
