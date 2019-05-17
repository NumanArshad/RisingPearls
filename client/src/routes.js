
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import RegisterView from './components/CreateAccount/Create_View';
import todoView from './components/TodoList/todo_view';
import DashboardView from './components/HomePage/Dashboard_View';
import MeetingsEventsView from './components/MeetingsEvents/MeetingsEvents_View'
import AdminEndView from './components/AdminEnd/AdminEnd_View'
const Root = () => (
<BrowserRouter>
    <Switch>

            {/*************************************User Login*************************************** */}

    <Route exact path='/' component={DashboardView} />
     {/* when show  meeting after post announcement */}
    <Route exact path='/Announcement/:MemberId' component={MeetingsEventsView} />
    {/* when show direct meeting */}
    <Route exact path='/Announcement' component={MeetingsEventsView} /> 
 {/* when member going to post */}
     <Route exact path='/Login/:MemberId' component={LoginView} />
      <Route exact path='/todoView/:userId' component={todoView} />


      {/*************************************Admin Login*************************************** */}
      <Route exact path='/Login' component={LoginView} />
      <Route exact path='/Register' component={RegisterView} />
      <Route exact path='/Admin/:adminId' component={AdminEndView} />
      <Route exact path='/ManageMember/:adminId' component={DashboardView} />
      <Route exact path='/ManageAnnouncement/:adminId' component={MeetingsEventsView} /> 



    </Switch>
  </BrowserRouter >
);
export default Root;
