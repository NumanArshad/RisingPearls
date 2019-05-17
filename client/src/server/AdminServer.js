import {admin_Actions} from '../constants/AdminEnd'
import store from '../store'
import {ROOT_URL} from '../constants/config';


export const adminServer = {
handleAdd: handleAdd,
handleList: handleList
}
export function handleAdd(admin,userId)
{
  var user ={'todolist':admin,'userId':userId}
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/postAll', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.adminStatus )
      console.log(data.adminStatus)
    if(data.adminStatus=='Failure') {
      store.dispatch({type:admin_Actions.admin_Create.FAILURE,payload:data});
      }
    else if(data.adminStatus=='created') {
      store.dispatch({type:admin_Actions.admin_Create.CREATED,payload:data});
      return;
    }

     });
   })


return {type:admin_Actions.admin_Create.NEW,payload:'none'};

};
export function handleList(userId)
{
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/getOne/'+userId,{
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
        mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log('********'+response.status);
      //  alert(data.adminStatus);
    if(data.adminStatus=='Failure') {
      store.dispatch({type:admin_Actions.admin_Create.FAILURE,payload:data});
      }
    else if(data.adminStatus=='created') {
      store.dispatch({type:admin_Actions.admin_Create.FIND,payload:data});
      return;
    }
     });
   })
return {type:admin_Actions.admin_Create.NEW,payload:[]};

};
export function handleDel(userId)
{
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/delOne/'+userId,{
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
        mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      alert(data.todolist.length);
      console.log('********'+response.status);
    if(data.adminStatus=='Failure') {
      store.dispatch({type:admin_Actions.admin_Create.FAILURE,payload:data});
      }
    else if(data.adminStatus=='created') {
      store.dispatch({type:admin_Actions.admin_Create.FIND,payload:data});
      return;
    }
     });
   })
return {type:admin_Actions.admin_Create.NEW,payload:[]};

};