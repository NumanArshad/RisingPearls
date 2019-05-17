const MeetingEvent = require("../models/meetingEvents");
const Members = require("../models/societyMembers");
var {google} = require("googleapis");
// // import the Google drive module in google library
var drive = google.drive("v3");
//import our private key
var key = require("./private_key.json");
var path = require("path");
var fs = require("fs");
var jwToken = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key, ["https://www.googleapis.com/auth/drive"],
  null
);
jwToken.authorize((authErr) => {
  if (authErr) {
    console.log("error : " + authErr);
    return;
  } else {
    console.log("Authorization accorded");
  }
});
// var folderId = "1ZWg0TlNX2LdRkM_6aePCIAU3R60k8CpR";
// var fileMetadata = {
//   'name': 'myvideo.mp4',
//   parents: [folderId]
// };
// var media = {
//   mimeType: '',
//   body: fs.createReadStream(path.join(__dirname, './Folder Access Denied_ How to delete any folder in Windows 10.mp4'))
// };

// drive.files.create({
//   auth: jwToken,
//   resource: fileMetadata,
//   media: media,
//   fields: 'id'
// }, function(err, file) {
//   if (err) {
//     // Handle error
//     console.error(err);
//   } else {
//     console.log('File Id: ', file.data.id);
//   }
// });
exports.addMeetingEvent = (req,res) =>{
console.log(req)
console.log(req.body);
  console.log("Register ATTEMPT FROM :" , req.body.username)

  Members.findById(req.params.memberId)
    .then(member => {
          console.log(member);
          //res.status(200).json({'getImageURLStatus':'FindSuccess','MemberImageURL':member.imageURL});
           console.log("member not found, create member")
           meetingeventDetail={
            memberImageURL:member.imageURL,
            category: req.body.category,
            eventTitle:req.body.eventTitle,
            announcement:req.body.announcement,
            date:req.body.date,
            eventImages:req.body.eventImages
           }
        //   let newMeetingEvent = new MeetingEvent(req.body)
        let newMeetingEvent = new MeetingEvent(meetingeventDetail)
           newMeetingEvent.save((err, account) => {
            if (err) {
              console.log("failure in creating newMembers",err);
              res.status(200).json({'announceStatus':'failure','err':err});
             }
            else{
             console.log("before found",account);
           //  res.status(200).json({'announceStatus':'created','announcementDetail':account});
                MeetingEvent.find()
                  .then(todosall => {
                   console.log("find all success"+todosall);
                   res.status(200).json({'announceStatus':'FindAll','meetingEventslist':todosall});
                    }).catch(err => {
                 //console.log('sanan')
                   res.status(500).json({'announceStatus':'failure','err':err});
               });
            }
            });

    }).catch(err => {
      console.log('invalid member id')
        res.status(500).json({'announceStatus':'failure','err':err});
    });

  }
//});
//}

exports.updatebyAddingEventImages = (req, res) => {
  //console.log("member not found, create member")
 var ImageListObject={
    eventImages:req.body.eventImages
  }
  MeetingEvent.findByIdAndUpdate(req.params._id, { $set: ImageListObject }, { new: true }, (err, doc) => {
        if (!err) {
            // res.send(doc);
            console.log("updated successfully");
            res.status(200).send({'announceStatus':'UPDATED', 'data':doc});
            }
        else { 
            res.status(500).send({'announceStatus':'NOT_UPDATED', 'data':doc}); }
    });
  };

exports.getAllMeetingEvents = (req ,res) => {
  console.log("getting one member");`` 
  //query ={userId:req.params.userId};
  MeetingEvent.find()
  .then(todos => {
        console.log(todos);
        res.status(200).json({'announceStatus':'FindAll','meetingEventslist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'announceStatus':'failure','err':err});
    });
};

exports.delMeetingEvent =(req,res) => {
  console.log("deletting One");
  query ={_id:req.params.userId};
  MeetingEvent.deleteMany()
  .then(todos => {
        res.status(200).json({'announceStatus':'deleted','todolist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'announceStatus':'failure','err':err});
    });
}


