const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  senderName: {
    type: String,
    required: true
  },
  recieverName: {
    type: String,
    required: true
  }, senderId: {
    type: String,
    required: true
  },
  recieverId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    unique: true,
    required: true

  },
  
  timestamps: true
});

let Message = mongoose.model('Message', messageSchema);
module.exports=Message
class messageModel{

}
