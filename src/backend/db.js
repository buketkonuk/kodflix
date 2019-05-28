var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
module.exports = { connect };

function connect() {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db("kodflix");
        dbo.collection("shows").findOne({} , (err, res) => {
            if (err) throw err;
            console.log(res.title);
            db.close();
        });
    });
}
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     var dbo = db.db("kodflix");
//     dbo.collection("shows").findOne({} , (err, res) => {
//         if (err) throw err;
//         console.log(res.title);
//         db.close();
//     });

// });