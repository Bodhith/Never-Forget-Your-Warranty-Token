const express = require('express');
const path = require('path');

const app = express();

const host = "localhost";
const port = 3000;

app.use(express.static('src'));

app.get('/customer', (req, res) => {
   res.sendFile("index.html", {
      root: path.join(__dirname)+"\\src\\customer"
   });
});

app.get('/executive', (req, res) => {
   res.sendFile("index.html", {
      root: path.join(__dirname)+"\\src\\executive"
   });
});

app.listen(port, host, () => {
   console.log(`Server is up at ${port}`);
});