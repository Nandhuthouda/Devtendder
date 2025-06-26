const express = require('express');
const app = express();

app.use("/Hello",(req, res)=> {
  res.send("Hello, nandhu!");    
});

app.use("/test",(req, res)=> {
  res.send("Hello, World!");    
});

app.use("/",(req, res)=> {
  res.send("Hello, nanmojmojmodhu!");    
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});