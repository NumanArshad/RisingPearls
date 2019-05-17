const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventImages = new Schema({
    eventId:{type: Schema.Types.ObjectId,ref:'MeetingEvents'},

  eventImageURL: {
    type: String
  }
  
});

module.exports = mongoose.model("EventImages", EventImages);
