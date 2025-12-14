import Message from "../models/Message.js"

export async function getMessageByName(req, res) {
  try {
    const { name } = req.params;
    
    // Use case-insensitive search
    const message = await Message.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });
    
    if (!message) {
      return res.status(404).json({ message: "No message found for this name" });
    }
    
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createMessage(req, res) {
  try {
    const { name, title, content } = req.body;
    const newMessage = new Message({ name, title, content });

    await newMessage.save();
    res.status(201).json({ message: "success", data: newMessage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
}