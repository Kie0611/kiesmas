import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
}, 
  {timestamps: true}
)

const Message = mongoose.model("Message", messageSchema)

export default Message