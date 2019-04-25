const express = require('express')
const app = express()
const port = 3000
const showsList = require("./showsList.js");


app.get("/rest/shows", (req, res) => {
    res.send(showsList);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))