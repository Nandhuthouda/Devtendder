const express = require('express');
const app = express();


const { adminAuth, userAuth } = require('./middleWare/Auth');


app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.use("/admin/GetAlldata", (req, res) => {
  res.send("admin is Athorized person");
});

app.use("/user", (req, res) => {
  res.send("user is Athorized person");
});


app.use("/admin/DeleteAll", (req, res) => {
  res.send("A user is deleted!");
});

app.use("/admin/", (req, res) => {
  res.send("Wrong URL");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});