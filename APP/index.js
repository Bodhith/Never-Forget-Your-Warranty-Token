const express = require('express');
const app = express();

const host = "localhost";
const port = 3000;

app.use(express.static('src'));

app.get('/', (req, res) => {
   res.send("jhhvb");
});

app.listen(port, host, () => {
   console.log(`Server is up at ${port}`);
});