import {dashboard_Actions} from '../constants/Dashboard'
import {dashboard_Status} from '../constants/Dashboard'

const dashboard_initialState = {
    dashboard_Status: dashboard_Status.dashboard_Show.HomePage,
    meetingeventList:[]
  };

  export default function (state = dashboard_initialState, action) {
   console.log(action.type+"constant "+dashboard_Actions.dashboard_Show.ABOUTUS);
   //alert(action.type+"reducer");
    switch(action.type) {
    	case dashboard_Actions.dashboard_Show.HomePage:// start fetching posts and set loading = true
        console.log("I am from Reduce dashboard New.. with action"+action.type);
        return {...state, dashboard_Status: dashboard_Status.dashboard_Show.HomePage}

      case dashboard_Actions.dashboard_Show.ABOUTUS:
       console.log("I am from Reducer about us.."+action.payload.memberlist.length);
       return {...state, dashboard_Status: dashboard_Status.dashboard_Show.ABOUTUS,memberList:action.payload.memberlist}
       
       case dashboard_Actions.dashboard_Show.ADDMEMBER:// start fetching posts and set loading = true
       console.log("I am from Reduce dashboard New ADDMEMBER.. with action"+action.type);
       return {...state, dashboard_Status: dashboard_Status.dashboard_Show.ADDMEMBER}
  
        
      default:
     	console.log("dashboard default is firing");
        return {...state,dashboard_Status: dashboard_Status.dashboard_Show.HomePage};

  }
};
