const Login = require("../models/Login");

exports.handleSignIn = (req,res) =>{

  console.log("SIGN IN ATTEMPT FROM :" , req.body.username)
  Login.findOne({memberId:req.body.memberId,isAdmin:req.body.isAdmin,username: req.body.username,password:req.body.password}, (err, account) => {
    if (err) {
       console.log("Error in Server " +account)
      res.status(500).send({'signInStatus':'failure','err':err});
    }
    if(account != null || account != undefined ){
      console.log("Account found")
        res.status(200).send({'signInStatus':'authorized','loginUser':account});
      }
      else{
        console.log("Account not found")
          res.status(200).send({'signInStatus':'not_authorized','err':err});
  }
});
}


exports.handleSignInForget = (req,res) =>{

  console.log("FORGET SIGN IN ATTEMPT FROM :" , req.body.username)
  Login.findOne({username: req.body.username}, (err, account) => {
    if (err) {
       console.log("Error in Server " +account)
      res.status(500).send({'signInStatus':'failure','err':err});
    }
    if(account != null || account != undefined ){
      console.log("Account found")
        res.status(200).send({'signInStatus':'authorized','err':err});
      }
      else{
        console.log("Account not found")
          res.status(200).send({'signInStatus':'not_authorized','err':err});
  }
});


}





exports.getAllAccounts = (req,res) =>{

  console.log("Get all accounts ")
  Login.find({}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    res.status(200).json(accounts);
  });


}


exports.delAllUsers =(req,res) => {
  console.log("deletting user");
  //query ={_id:req.params.userId};
  Login.deleteMany()
  .then(todos => {
        res.status(200).json({'signInStatus':'deleted','todolist':todos});
    }).catch(err => {
      //console.log('sanan')
        res.status(500).json({'signInStatus':'failure','err':err});
    });
}
