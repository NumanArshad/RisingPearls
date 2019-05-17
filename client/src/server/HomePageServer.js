import {dashboard_Actions} from '../constants/Dashboard'
import store from '../store'
import {ROOT_URL} from '../constants/config';


export const dashboardServer = {
//handlegetMembers: handlegetMembers,
handleMemberList: handleMemberList,
handleAddMember:handleAddMember
}
export function handleMemberList()
{
 
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/getAllMember', {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
     
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
    if(data.memberStatus=='failure') {
      alert("failure")
      store.dispatch({type:dashboard_Actions.dashboard_Show.HomePage,payload:data});
      }
    else if(data.memberStatus=='FindAll') {
      alert(data.memberlist.length+" in dashboard serverr with previous action");
      store.dispatch({type:dashboard_Actions.dashboard_Show.ABOUTUS,payload:data});
     // alert(dashboard_Actions.dashboard_Show);
      return;
    }

     });
   })


return {type:dashboard_Actions.dashboard_Show.HomePage,payload:[]};

};



export function handleAddMember(imageURL,name,status,session,contact,dept,loginId,password)
{
  alert(imageURL+"/"+"name"+name+"status"+status+"session"+session+"dept"+dept+"loginId"+loginId+"password"+password)
 var user={"imageURL":imageURL,"name":name,"status":status,"session":session,"contact":contact,"dept":dept,
"username":loginId,"password":password}
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/addMember', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
         body: JSON.stringify(user)

   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
    if(data.memberStatus=='failure') {
      alert("failure")
      store.dispatch({type:dashboard_Actions.dashboard_Show.ADDMEMBER,payload:data});
      }
    else if(data.memberStatus=='SaveNewAndFindAll') {
      alert(data.memberlist.length+" in dashboard serverr with  after add member")
      store.dispatch({type:dashboard_Actions.dashboard_Show.ABOUTUS,payload:data});
     // alert(dashboard_Actions.dashboard_Show);
      return;
    }

     });
   })


return {type:dashboard_Actions.dashboard_Show.ADDMEMBER,payload:[]};

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
//       store.dispatch({type:dashboard_Actions.dashboard_Show.FAILURE,payload:data});
//       }
//     else if(data.itemStatus=='created') {
//       store.dispatch({type:dashboard_Actions.dashboard_Show.FIND,payload:data});
//       return;
//     }
//      });
//    })
// return {type:dashboard_Actions.dashboard_Show.NEW,payload:[]};

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
//       store.dispatch({type:dashboard_Actions.dashboard_Show.FAILURE,payload:data});
//       }
//     else if(data.itemStatus=='created') {
//       store.dispatch({type:dashboard_Actions.dashboard_Show.FIND,payload:data});
//       return;
//     }
//      });
//    })
// return {type:dashboard_Actions.dashboard_Show.NEW,payload:[]};

// };