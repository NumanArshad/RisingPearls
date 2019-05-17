const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeetingEvents = new Schema({
  memberImageURL: {
    type: String
  },
  eventTitle:{
type:String
  },
  category: {
    type: String
  },
  announcement:{
      type:String
  },
  date:{
      type:String//Date
  },
  eventImages:[]
 
  
});

module.exports = mongoose.model("MeetingEvents", MeetingEvents);
