
import React, { Component } from "react";
import { connect } from "react-redux";



import AddMeeting from './AddMeeting';
import ShowMeetings from './ShowMeetings';
import Preview from './preview';
import ImageUploadPreview from './imageUploadPreview'
import TitlebarGridList from './eventsImagesGrid'
import ShowEventImages from  './ShowEventImages';
import { announcementServer } from '../../server/MeetingsEventsServer';
import { announcement_Status } from '../../constants/MeetingsEvents';
import { announcement_Actions } from '../../constants/MeetingsEvents';


const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    announcement_Status: state.announcement_Reducer.announcement_Status,
    memberList:state.announcement_Reducer.memberList,
    specificeventImg:state.announcement_Reducer.specificeventImg
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleMemberList: (announcement,eventTitle,category,date,memberId) => { dispatch(announcementServer.handleAdd(announcement,eventTitle,category,date,memberId)) },
    handleAnnouncementList: () => { dispatch(announcementServer.handleAnnouncementList()) },
    handleuploadEventImage:(eventId,eventImageURL)=> { dispatch(announcementServer.handleuploadEventImage(eventId,eventImageURL)) },
    handleSpecificEventImagesList:(eventId)=> { dispatch(announcementServer.handleSpecificEventImagesList(eventId)) },
//  handleSignInForget: (username) => { dispatch(loginServer.handleSignInForget(username)) },
    
    


     
  };
};

class MeetingsEventsView extends Component {
  constructor(props){
    super(props);
    this.state={memberlist:this.props.memberList,specificeventImglist:this.props.specificeventImg}
  }
  componentDidMount(){
    alert("member id is"+this.props.match.params.MemberId)
    alert("admin id is"+this.props.match.params.adminId)
    // if(this.props.match.params.MemberId==undefined){
    //  this.props.handleAnnouncementList(); 
    // }
  }
	componentWillReceiveProps(ItemsProps) {
		this.setState({memberlist:ItemsProps.memberList,specificeventImglist:ItemsProps.specificeventImg})
	}
  getScreen(status) {
     //alert(status);
    console.log("I am from Dashboard Component getScreen: " + status);
    switch (status) {
      
      case announcement_Status.announcement_Show.NEW:
      alert(status)
     if(this.props.match.params.MemberId==undefined){
        this.props.handleAnnouncementList();
      }
      else{
        return (
          <AddMeeting handleAboutUsClick={this.props.handleMemberList} memberId={this.props.match.params.MemberId} 
          handleAnnouncementList={this.props.handleAnnouncementList} />
        );
     }
        break;
     case announcement_Status.announcement_Show.SHOWMEETING:
  //    alert("before child"+this.state.memberlist[0].eventImages.length)
      return (
        <ShowMeetings  handleShowMeetingClick={this.props.handleShowMeetingClick} handleSpecificEventImagesList={this.props.handleSpecificEventImagesList}
         memberlist={this.state.memberlist} handleuploadEventImage={this.props.handleuploadEventImage} 
         adminId={this.props.match.params.adminId} />
      );
      break;
    


case announcement_Status.announcement_Show.SHOWEVENTIMAGES:
alert('last'+this.state.specificeventImglist.length);

 return (
  <ShowEventImages  specificeventImglist={this.state.specificeventImglist} />
  // <Preview />
  // <ImageUploadPreview />
  // <TitlebarGridList /> 
  //https://lms.uet.edu.pk/web#view_type=form&model=obe.offered_subject&menu_id=342&action=376
  //https://lms.uet.edu.pk/web#view_type=form&model=obe.offered_subject&menu_id=342&action=376
);
break;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.announcement_Status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingsEventsView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
