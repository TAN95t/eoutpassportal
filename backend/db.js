const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://user1234:user1234@cluster0.tolqh.mongodb.net/outpass?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo;
