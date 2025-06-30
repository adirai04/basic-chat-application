const express = require('express');
const app = express();

const mongoose = require('mongoose');
main().then(res => console.log("connection achieved"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));

const Chat = require("./models/chat.js"); 

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log("server is working on the port 8080");
});

app.get("/",(req, res) => {
    res.send("server is working");
});

//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", {chats});
});

//Create Chat
app.post("/chats", (req, res) => {
  let {from, to, msg} = req.body; 
  let newChat = new Chat ({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
  });
  Chat.insertOne(newChat).then((res) => {console.log("chat was saved")})
  .catch((err) =>{console.log(err)});
  res.redirect("/chats");
}) ;

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
})

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let {id} = req.params;
  chat =  await Chat.findById(id);
  res.render("edit.ejs", {chat});
})

// Update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {msg: newMsg},
    {runValidators: true, new: true}
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
})