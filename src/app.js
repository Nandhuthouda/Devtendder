const express = require('express');
const connectDB  = require("./config/database"); 
const app = express();
const User = require("./models/users")

app.use(express.json());

// app.post("/signup", async (req, res) => {
//   console.log(req.body);

// });

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  // console.log(user);
  try{
  // Save the user to the database
    await user.save();
    res.send("User created successfully");
  }
  catch(err){
    console.error("Error saving user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/users", async (req, res)=>{
  const userEmail = req.body.emailId
  console.log(userEmail);
  try{
    // console.log(userEmail);
    const user = await User.find({emailId:userEmail})
    res.send(user);
  }
  catch(err){
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async(req, res)=>{
  
  try{
    // await user.save()
    const user = await User.find({});
    console.log(user);
    res.send(user)
  }
  catch(err){
    console.error("Error saving user:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

connectDB()
.then(() => {
  console.log("Database connected successfully");
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch((err) => {
    console.error("Database connection failed:");
});



