// const cors = require('C:/Users/Numan/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/cors');
// const express = require("C:/Users/Numan/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express");
// var path = require('path')
// const bodyParser = require("C:/Users/Numan/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/body-parser");
// var config=require("./config/db");
const cors = require('cors');
const express = require("express");
var path = require('path');
const bodyParser = require("body-parser");
var config = require("./config/db");

const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
//const todoController = require("./controllers/todoController.js");
const societyMemberController=require('./controllers/SocietyMemberController');

const meetingEventController=require("./controllers/MeetingEventsController");
const eventImagesController=require("./controllers/eventImagesController")
const app = express();
const port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app
    .route("/api/Accounts/SignIn",)
    .post(loginController.handleSignIn)

  // app 5c1cf99f0185061088fa41e1
  //   .route("/api/Accounts/SignInForget",)
  //   .post(loginController.handleSignInForget)
  
  app
  .route("/api/Accounts/delAllUsers",)
  .post(loginController.delAllUsers)
  app
    .route("/api/Accounts/Register",)
    .post(registerController.handleRegister)

  app
    .route("/api/Accounts/getAll",)
    .get(loginController.getAllAccounts)
  app
    .route("/api/Accounts/addMember",)
    .post(societyMemberController.addMember)

    
    app
    .route("/api/Accounts/delMemberAllData/:memberId",)
    .post(societyMemberController.delMemberAllData)
  app
    .route("/api/Accounts/getAllMember",)
    .get(societyMemberController.getAllMember)
 app
    .route("/api/Accounts/deleteAllMember",)
    .get(societyMemberController.delAll)

    // app
    // .route("/api/Accounts/getMemberImageUrl/:memberId",)
    // .get(societyMemberController.getMemberImageUrl)
  app
    .route("/api/Accounts/addMeetingEvent/:memberId",)
    .post(meetingEventController.addMeetingEvent)
  app
    .route("/api/Accounts/getAllMeetingEvents",)
    .get(meetingEventController.getAllMeetingEvents)

    app
    .route("/api/Accounts/deleteAllMeetingEvents",)
    .get(meetingEventController.delMeetingEvent)
    
  app
    .route("/api/Accounts/addEventImage",)
    .post(eventImagesController.addEventImage)

    
    app
    .route("/api/Accounts/deleteEventImage/:imageId",)
    .post(eventImagesController.deleteEventImage)
  app
    .route("/api/Accounts/getAllEventImages",)
    .get(eventImagesController.getAllEventImages)
  app
    .route("/api/Accounts/getSpecificEventImages/:_id",)
    .get(eventImagesController.getSpecificEventImages)
    
    app
    .route("/api/Accounts/dellAllEventImages",)
    .get(eventImagesController.dellAllEventImages)
  // app 
  //   .route("/api/Accounts/postAll",)
  //   .post(todoController.postAll)
  // app
  //   .route("/api/Accounts/findAll",)
  //   .get(todoController.findAll)
  // app
  //   .route("/api/Accounts/getOne/:userId",)
  //   .get(todoController.getOne)
  // app
  //   .route("/api/Accounts/delOne/:userId",)
  //   .post(todoController.delOne)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
