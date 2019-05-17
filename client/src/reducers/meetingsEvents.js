import {announcement_Actions} from '../constants/MeetingsEvents'
import {announcement_Status} from '../constants/MeetingsEvents'

const announcement_initialState = {
    announcement_Status: announcement_Status.announcement_Show.NEW,
    memberList:[],
    specificeventImg:[]
  };

  export default function (state = announcement_initialState, action) {
   console.log(action.type+"constant ");
   //alert(action.type+"reducer");
    switch(action.type) {
    	case announcement_Actions.announcement_Show.NEW:// start fetching posts and set loading = true
        console.log("I am from Reduce event meetings New.. with action"+action.type);
        return {...state, announcement_Status: announcement_Status.announcement_Show.NEW}
   
        case announcement_Actions.announcement_Show.ADDMEETING:
      console.log("I am from Reducer SUCCESSFULLY ADDDED MEETING IN DATABASE..");
         //alert("in recuder"+ action.payload.meetingEventslist.length)
        return {...state, announcement_Status: announcement_Status.announcement_Show.SHOWMEETING,memberList:action.payload.meetingEventslist}
        
        case announcement_Actions.announcement_Show.GETIMGSUCCESS:
        console.log("I am from Reducer SUCCESSFULLY GETIMGSUCCESS from DATABASE..");
           //alert("in recuder"+ action.payload.meetingEventslist.length)
          return {...state, announcement_Status: announcement_Status.announcement_Show.SHOWEVENTIMAGES,specificeventImg:action.payload.SpecificEventImagelist}
        
      default:
     	console.log("event meeting default is firing");
        return {...state,announcement_Status: announcement_Status.announcement_Show.NEW};

  }
};
