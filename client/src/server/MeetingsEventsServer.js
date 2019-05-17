import {announcement_Actions} from '../constants/MeetingsEvents'
import store from '../store'
import {ROOT_URL} from '../constants/config';


export const announcementServer = {
handleAdd: handleAdd,
handleAnnouncementList: handleAnnouncementList,
handleuploadEventImage:handleuploadEventImage,
handleSpecificEventImagesList:handleSpecificEventImagesList
}
export function handleAdd(announcement,eventTitle,category,date,memberId)
{//addMeetingEvent
  var user ={'announcement':announcement,'eventTitle':eventTitle,'category':category,'date':date} //getAllMeetingEvents
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/addMeetingEvent/'+memberId, {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    alert('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.announceStatus )
      console.log(data.announceStatus)
    if(data.announceStatus=='failure') {
      store.dispatch({type:announcement_Actions.announcement_Show.NEW,payload:data});
      }
    else if(data.announceStatus=='FindAll') {
      alert("after response in server list length is"+data.meetingEventslist.length);

      store.dispatch({type:announcement_Actions.announcement_Show.ADDMEETING,payload:data});
      return;
    }

     });
   })

return {type:announcement_Actions.announcement_Show.NEW,payload:'none'};
};



export function handleAnnouncementList()
{//addMeetingEvent
//getAllMeetingEvents
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/getAllMeetingEvents', {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);
   // alert('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.announceStatus )
      console.log(data.announceStatus)
    if(data.announceStatus=='failure') {
      store.dispatch({type:announcement_Actions.announcement_Show.NEW,payload:data});
      }
    else if(data.announceStatus=='FindAll') {
      //alert("after response in server list length is"+data.meetingEventslist.length);

      store.dispatch({type:announcement_Actions.announcement_Show.ADDMEETING,payload:data});
      return;
    }

     });
   })

return {type:announcement_Actions.announcement_Show.NEW,payload:'none'};
};



export function handleuploadEventImage(eventId,eventImageURL)
{//addMeetingEvent
//getAllMeetingEvents
var user ={'eventId':eventId,'eventImageURL':eventImageURL}
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/addEventImage', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
         body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
   // alert('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.announceStatus )
      console.log(data.announceStatus)
    if(data.announceStatus=='NOT_UPDATED') {
      store.dispatch({type:announcement_Actions.announcement_Show.NEW,payload:data});
      }
    else if(data.announceStatus=='announceUPDATEDImageSave') {
      alert("after response of upload image meeting event in server  list length is"+data.meetingEventslist.length);

      store.dispatch({type:announcement_Actions.announcement_Show.ADDMEETING,payload:data});
      return;
    }

     });
   })

return {type:announcement_Actions.announcement_Show.NEW,payload:'none'};
};


export function handleSpecificEventImagesList(eventId)
{

  const postRequest =  fetch(ROOT_URL+'/api/Accounts/getSpecificEventImages/'+eventId, {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        //  body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
   // alert('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.EventImageStatus )
      console.log(data.EventImageStatus)
    if(data.EventImageStatus=='failure') {
      store.dispatch({type:announcement_Actions.announcement_Show.NEW,payload:data});
      }
    else if(data.EventImageStatus=='FindSpecific') {
      alert("after response of upload image meeting event in server  list length is"+data.SpecificEventImagelist.length);

      store.dispatch({type:announcement_Actions.announcement_Show.GETIMGSUCCESS,payload:data});
      return;
    }

     });
   })

return {type:announcement_Actions.announcement_Show.ADDMEETING,payload:'none'};
};
// export function handleList(userId)
// {
//   const postRequest =  fetch(ROOT_URL+'/api/Accounts/getOne/'+userId,{
//         method: 'GET',
//         headers: {'Content-Type':'application/json;charset=UTF-8'},
//         mode: 'cors',
//    }).then((response)=>{
//     console.log('********'+response.status);
//     response.json().then(data=>{
//       console.log('********'+response.status);
//       //  alert(data.itemStatus);
//     if(data.itemStatus=='Failure') {
//       store.dispatch({type:announcement_Actions.announcement_Show.FAILURE,payload:data});
//       }
//     else if(data.itemStatus=='created') {
//       store.dispatch({type:announcement_Actions.announcement_Show.FIND,payload:data});
//       return;
//     }
//      });
//    })
// return {type:announcement_Actions.announcement_Show.NEW,payload:[]};

// };
// export function handleDel(userId)
// {
//   const postRequest =  fetch(ROOT_URL+'/api/Accounts/delOne/'+userId,{
//         method: 'POST',
//         headers: {'Content-Type':'application/json;charset=UTF-8'},
//         mode: 'cors',
//    }).then((response)=>{
//     console.log('********'+response.status);
//     response.json().then(data=>{
//       alert(data.todolist.length);
//       console.log('********'+response.status);
//     if(data.itemStatus=='Failure') {
//       store.dispatch({type:announcement_Actions.announcement_Show.FAILURE,payload:data});
//       }
//     else if(data.itemStatus=='created') {
//       store.dispatch({type:announcement_Actions.announcement_Show.FIND,payload:data});
//       return;
//     }
//      });
//    })
// return {type:announcement_Actions.announcement_Show.NEW,payload:[]};

// };