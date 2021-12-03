const express = require('express');
const services = require('./services/services');

const app = express();

const host = "localhost";
const port = 3000;

app.use(express.static('src'));

app.get('/home', async (req, res) => {
   
   services.loadWeb3();
   
   var user = await services
      .getUserType()
      .then(function(res) {
         console.log(1, res);
         return res;
      });
   console.log(2, user);
   if(user == "customer") {
      res.sendFile("D:\\LEARNING\\MASTERS\\SEM 1\\BLOCK CHAIN\\PROJECT\\PHASE 4\\APP\\src\\customer\\index.html")
   }
   else if(user == "executive") {
      res.sendFile("D:\\LEARNING\\MASTERS\\SEM 1\\BLOCK CHAIN\\PROJECT\\PHASE 4\\APP\\src\\executive\\index.html")
   }

});

app.listen(port, host, () => {
   console.log(`Server is up at ${port}`);
});