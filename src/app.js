const express = require('express');
const app = express();



app.use("/Hello", (req, res) => {
  // res.send("Hello, nandhu!");
  const token = "nandhu";
  const isValid = token === "nandhu";
  if(isValid){
    res.send("nandhu is valid");
  }
  else{
    res.status(401).send("Unauthorized");
  }
  // console.log("r1");
  // next()
},
// (req, res) => {
//   console.log("r2");
//   res.send("Hello, nandhu!");
// } 
);

app.use("/test", (req, res) => {
  res.send("Hello, World!");
});

app.use("/", (req, res) => {
  res.send("Hello, nandhu!");
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});