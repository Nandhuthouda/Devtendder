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

//asycn and await example
app.post("/form", async (req, res) => {
  const vari = new User(req.body);

  // Delay function (waits for given milliseconds)
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    console.log("⏳ Waiting for 15 seconds before saving...");
    await sleep(15000);  // 15 seconds delay

    await vari.save();  // Now save the data after delay
    res.send("✅ User vari saved");
    console.log("✅ Done");
  } catch (err) {
    console.log("❌ Error:", err);
    res.status(500).send("Internal Server Error");
  }

  console.log("📍 End of /form route");
});
// console.log("first");

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

app.delete("/remove", async(req, res)=>{
  const userId = req.body.userId;
  try{
    const user = await User.findOneAndDelete({_id:userId});
    res.send("user deleted succesfully");
  }
  catch(err){
    console.error("Error saving user:", err.message);
    res.status(404).send("Internal Server Error");
  }
})


app.patch("/update", async(req, res)=>{
  const userId = req.body.userId;
  const data = req.body;
  console.log(data);
  try{
    const user = await User.findByIdAndUpdate({_id:userId},data);
    res.send("....")
  }
  catch(err){
    console.error("Error saving user:", err.message);
    res.status(404).send("Internal Server Error");
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



