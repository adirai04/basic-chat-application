const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(res => console.log("connection achieved"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
} 

const messages = [
  {
    from: "Abhinav",
    to: "Kunal",
    msg: "Send me the notes",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Rohan",
    msg: "Are you coming to the meeting?",
    created_at: new Date()
  },
  {
    from: "Sneha",
    to: "Aditya",
    msg: "Please review the report.",
    created_at: new Date()
  },
  {
    from: "Raj",
    to: "Neha",
    msg: "Happy Birthday!",
    created_at: new Date()
  },
  {
    from: "Amit",
    to: "Vikram",
    msg: "Let's catch up this weekend.",
    created_at: new Date()
  }
];

Chat.insertMany(messages)
.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});