const EventImages = require("../models/eventImages");
const MeetingEvent = require("../models/meetingEvents");

exports.addEventImage = (req,res) =>{
console.log(req)
console.log(req.body);

        console.log("member not found, create member")
        let newEventImage = new EventImages(req.body)
        newEventImage.save((err, account) => {
          if (err) {
            console.log("failure in creating newMembers",err);
            res.status(200).json({'EventImageStatus':'failure','err':err});
          }
          else{
            console.log("account created",account);
       //     res.status(200).json({'EventImageStatus':'created','err':account});
                  query ={eventId:req.body.eventId};
                  EventImages.find(query)
                  .then(todos => {
                    console.log(todos);
                    //res.status(200).json({'EventImageStatus':'FindSpecific','SpecificEventImagelist':todos});
                         var ImageListObject={eventImages:todos}
                          MeetingEvent.findByIdAndUpdate(req.body.eventId, { $set: ImageListObject }, { new: true }, (err, doc) => {
                          if (!err) {
                              // res.send(doc);
                                  console.log("updated successfully");
                             // res.status(200).send({'announceStatus':'announceUPDATEDImageSave', 'meetingEventslist':doc});
                                      MeetingEvent.find()
                                     .then(allMeetingEvents => {
                                      console.log(allMeetingEvents);
                                       res.status(200).json({'announceStatus':'announceUPDATEDImageSave','meetingEventslist':allMeetingEvents});
                                     }).catch(err => {
                                     //console.log('sanan')
                                       res.status(500).json({'announceStatus':'failure','err':err});
                                      });
                              }
                          else { 
                              res.status(500).send({'announceStatus':'NOT_UPDATED', 'data':doc}); }
                      });   
                  
                  }).catch(err => {
                    res.status(500).json({'EventImageStatus':'failure','err':err});
                    });
          }
      });
    }
//});
//}

exports.deleteEventImage = (req,res) =>{
  console.log(req)
  console.log(req.body);
      console.log("member not found, create member")
        //  let newEventImage = new EventImages(req.body)
          EventImages.findByIdAndRemove(req.params.imageId,(err, account) => {
            if (err) {
              console.log("failure in creating newMembers",err);
              res.status(200).json({'EventImageDeleteStatus':'failure','err':err});
            }
            else //if(account!=null || account!=undefined)
            {
              console.log("account deleted",account);
         //     res.status(200).json({'EventImageStatus':'created','err':account});
                    query ={eventId:account.eventId};
                    EventImages.find(query)
                    .then(todos => {
                      console.log(todos);
                    //  res.status(200).json({'EventImageStatus':'FindSpecific','SpecificEventImagelist':todos});
                           var ImageListObject={eventImages:todos}
                            MeetingEvent.findByIdAndUpdate(account.eventId, { $set: ImageListObject }, { new: true }, (err, doc) => {
                            if (!err) {
                                // res.send(doc);
                                    console.log("updated successfully");
                               // res.status(200).send({'announceStatus':'announceUPDATEDImageSave', 'meetingEventslist':doc});
                                        MeetingEvent.find()
                                       .then(allMeetingEvents => {
                                        console.log(allMeetingEvents);
                                         res.status(200).json({'announceStatus':'announceUPDATEDImageSave','meetingEventslist':allMeetingEvents});
                                       }).catch(err => {
                                       //console.log('sanan')
                                         res.status(500).json({'announceStatus':'failure','err':err});
                                        });
                                }
                            else { 
                                res.status(500).send({'announceStatus':'NOT_UPDATED', 'data':doc}); }
                        });   
                    
                    }).catch(err => {
                      res.status(500).json({'EventImageDeleteStatus':'failure','err':err});
                      });
            }
        });
      }


exports.getAllEventImages = (req ,res) => {
  console.log("getting all EventImage");`` 
  //query ={userId:req.params.userId};
  EventImages.find()
  .then(todos => {
        console.log(todos);
        res.status(200).json({'EventImageStatus':'FindAll','EventImagelist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'EventImageStatus':'failure','err':err});
    });
};

exports.getSpecificEventImages = (req ,res) => {
  console.log("getting specific EventImage");`` 
  query ={eventId:req.params._id};
  EventImages.find(query)
  .then(todos => {
        console.log(todos);
        res.status(200).json({'EventImageStatus':'FindSpecific','SpecificEventImagelist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'EventImageStatus':'failure','err':err});
    });
};

exports.dellAllEventImages =(req,res) => {
  console.log("deletting All");
  query ={_id:req.params.userId};
  EventImages.deleteMany()
  .then(todos => {
        res.status(200).json({'EventImageStatus':'deleted','EventImagelist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'EventImageStatus':'failure','err':err});
    });
}


