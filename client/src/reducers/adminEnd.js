import {admin_Actions} from '../constants/AdminEnd'
import {admin_Status} from '../constants/AdminEnd'

const admin_initialState = {
    admin_Status: admin_Status.admin_Show.HomePage,
    meetingeventList:[]
  };

  export default function (state = admin_initialState, action) {
   console.log(action.type+"constant "+admin_Actions.admin_Show.ABOUTUS);
   //alert(action.type+"reducer");
    switch(action.type) {
    	case admin_Actions.admin_Show.HomePage:// start fetching posts and set loading = true
        console.log("I am from Reduce admin New.. with action"+action.type);
        return {...state, admin_Status: admin_Status.admin_Show.HomePage}

         case admin_Actions.admin_Show.ABOUTUS:

         console.log("I am from Reducer about us.."+action.payload.memberlist.length);

  
        return {...state, admin_Status: admin_Status.admin_Show.ABOUTUS,memberList:action.payload.memberlist}
       
//         case announcement_Actions.announcement_Show.SHOWMEETING:

//         console.log("I am from Reducer SUCCESSFULLY ADDDED MEETING IN DATABASE..");

//  alert("in recuder"+ action.payload.meetingEventslist.length)
//        return {...state, announcement_Status: announcement_Status.announcement_Show.SHOWMEETING,meetingeventList:action.payload.meetingEventslist}
        
      default:
     	console.log("admin default is firing");
        return {...state,admin_Status: admin_Status.admin_Show.HomePage};

  }
};
