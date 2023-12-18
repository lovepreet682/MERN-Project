const mongoose = require('mongoose')

//create the connection 
const mongooseDB = () => {
    // Connect to MongoDB
    mongoose.connect("mongodb://127.0.0.1:27017/curd");
    var db = mongoose.connection;

    db.on("connected", (err, result) => {
        if (err) throw err;
        else {
            console.log("Database is Connected");
        }
    });
}

module.exports= mongooseDB
