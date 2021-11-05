// *** Node.js comands **//
// git init
// npm init 
// npm install express
// npm run dev             http://localhost:4000/

const PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();

function onHttpStart() {
    console.log("Express http server listening on: " + PORT);
}

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/aboutme.html')
})

app.listen(PORT, onHttpStart);