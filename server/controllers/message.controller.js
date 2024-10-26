import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id : receiverID} = req.params;
        const senderID = req.user._id;
        

        let conversation = await Conversation.findOne({
            participants: { $all: [senderID, receiverID]}
        })
        
        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderID, receiverID]
            })
        }

        const newMessage = new Message({
            senderID,
            receiverID,
            message,
        })
        if(newMessage){
            conversation.message.push(newMessage._id);
        }

        // socket IO functionality go here

        // await conversation.save();
        // await newMessage.save() 

        await Promise.all([conversation.save(), newMessage._id]); // this will run in parallel

        res.status(201).json(newMessage);
    
    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id: userTochatId} = req.params;
        const senderID = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, userTochatId]}
        }).populate("message")

        if(!conversation) return res.status(200).json([]);
        const messages = conversation.message;

        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({
            error: "Internal server error"
        })
    }
}