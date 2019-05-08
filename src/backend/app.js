const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const showsList = require("./showsList");
const path = require('path');


app.get("/rest/shows", (req, res) => {
    res.send(showsList());
})
app.use(express.static(path.join(__dirname, './../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./../../build", 'index.html'));
});

app.get("/", (req, res) => {
    res.send('Welcome to Buket Kodflix App Front Page')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))