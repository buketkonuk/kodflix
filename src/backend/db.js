var MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
var url = process.env.NODE_ENV === 'PRD' ?  
     process.env.DB_URL_PRD : process.env.DB_URL_DEV
console.log(url);
module.exports = { connect };

function connect() {
    return new Promise((resolve) =>{
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {          
            if (err) throw err;
            var dbo = db.db("kodflix");  
            resolve(dbo);
    })
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