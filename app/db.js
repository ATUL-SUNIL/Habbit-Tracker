const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://atultods:Aimless@cluster1.6dpwafi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', { useNewUrlParser: true })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((err)=>console.log("Not Connected", err));
}
