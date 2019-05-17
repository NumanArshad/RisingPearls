const Members = require("../models/societyMembers");
const MeetingEvent = require("../models/meetingEvents");
const EventImages = require("../models/eventImages");
const Login = require("../models/Login");

exports.addMember = (req,res) =>{
console.log(req)
console.log(req.body);
  console.log("Register ATTEMPT FROM :" , req.body.username)
  Members.findOne({contact: req.body.contact}, (err, account) => {
    if (err)
    {
       console.log("Error in Server " +account)
      res.status(500).send({'memberStatus':'failure','err':err});
    }
    if(account != null || account != undefined )
    {
      console.log("member found")
        res.status(200).send({'memberStatus':'existing'});
    }
    else{
        console.log("member not found, create member")
        
        var newMember={imageURL:req.body.imageURL,status:req.body.status,name:req.body.name,dept:req.body.dept,session:req.body.session,
          contact:req.body.contact}
      //  let newMembers = new Members(req.body)
      let newMembers = new Members(newMember)
        newMembers.save((err, member) => {
          if (err) {
            console.log("failure in creating newMembers",err);
            res.status(200).json({'memberStatus':'failure','err':err});
          }
          else{
            console.log("member created",member);
         //   res.status(200).json({'memberStatus':'created','detail':account});
            var registerMember={memberId:member._id,username:req.body.username,password:req.body.password}
            let newAccount = new Login(registerMember)
            newAccount.save((err, account) => {
              if (err) {
                console.log("failure in creating newMembers",err);
                res.status(200).json({'memberStatus':'failure','err':err});
              }
              else{
                console.log("account created",account);
               //res.status(200).json({'memberStatus':'created','detail':account});
                    Members.find()
                    .then(allmember => {
                      console.log(allmember);
                    res.status(200).json({'memberStatus':'SaveNewAndFindAll','memberlist':allmember});
                    }).catch(err => {
                       res.status(500).json({'memberStatus':'failure','err':err});
                    });
              }
          })
        }
      });

  }
});
}


exports.getAllMember = (req ,res) => {
  console.log("getting one member");`` 
  //query ={userId:req.params.userId};
  Members.find()
  .then(todos => {
        console.log(todos);
        res.status(200).json({'memberStatus':'FindAll','memberlist':todos});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'memberStatus':'failure','err':err});
    });
};

exports.delMemberAllData = (req ,res) => {
  console.log("getting one member image url");`` 
  query ={_id:req.params.memberId};
  Members.findByIdAndRemove(req.params.memberId)
  .then(member => {
    console.log(member);
    // res.status(200).json({'getImageURLStatus':'FindSuccess','Member':member});
      MeetingEvent.findOneAndDelete({memberImageURL:member.imageURL}, (err, account) => {
      if (err) {
         console.log("Error in Server " +account)
        res.status(500).send({'deleteMemberDataStatus':'memberdeleteEventDeleteFailure','err':err});
      }
      if(account != null || account != undefined ){
        //console.log("Account found")
         // res.status(200).send({'deleteMemberDataStatus':'DeleteSuccess','Member':account});
             if(account.eventImages.length>0){
               var query={eventId:account._id}
              EventImages.deleteMany(query)
              .then(images => {
                console.log(images);
                res.status(200).json({'deleteMemberDataStatus':'DeleteSuccess','Member':member});
                }).catch(err => {
                res.status(500).json({'deleteMemberDataStatus':'alldeleteexceptImagesfailure','err':err});
              });
            }
        }
        else{
          console.log("Account not found")
            res.status(200).send({'deleteMemberDataStatus':'Member','err':err});
    }
  });
    }).catch(err => {
        res.status(500).json({'deleteMemberDataStatus':'memberdeletefailure','err':err});
    });
};

exports.getMemberImageUrl = (req ,res) => {
  console.log("getting one member image url");`` 
  //query ={_id:req.params.memberId};
  Members.findById(req.params.memberId)
  .then(todos => {
        console.log(todos);
        res.status(200).json({'getImageURLStatus':'FindSuccess','MemberImageURL':todos.imageURL});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'memberStatus':'failure','err':err});
    });
};



exports.delAll =(req,res) => {
  console.log("deleting many");
  //query ={_id:req.params.userId};
  Members.deleteMany()
  .then(todos => {
        res.status(200).json({'memberStatus':'deleted','todolist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'memberStatus':'failure','err':err});
    });
}


