const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocietyMembers = new Schema({
  imageURL: {
    type: String
  },
  status:{
    type:String
  },
  name: {
    type: String
  },
  dept:{
      type:String
  },
  session:{
      type:String
  },
  contact:{
      type:Number
  }
  
});
// LoginAccount.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash){
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });
module.exports = mongoose.model("SocietyMembers", SocietyMembers);
