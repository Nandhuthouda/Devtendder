const express = require('express');

const connectDB  = require("./config/database"); 

const app = express();

const User = require("./models/users")
app.post("/signup", (req, res) => {
  try{
    const user = new User ({
    firstName : "Nandhu",
    lastName : "thouda"
  });
  // Save the user to the database
  user.save();
    res.status(201).send("User created successfully");

}catch(err){
    console.error("Error saving user:", err);
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



