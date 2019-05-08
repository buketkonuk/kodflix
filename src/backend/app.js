const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const showsList = require("./showsList.js");
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get("/rest/shows", (req, res) => {
    res.send(showsList);
})
app.get("/", (req, res) => {
    res.send('Welcome to Buket Kodflix App Front Page')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))