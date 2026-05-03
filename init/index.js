const mongoose = require('mongoose')
const initdata = require("./data")
const Listing = require("../models/listing")

const MONGO_URL =
    process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/majorprojectvaibhav'

async function start() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('connected to DB');
        await initDB();
    } catch (err) {
        console.error('DB connection error:', err);
    } finally {
        mongoose.disconnect();
    }
}

const initDB = async () => {
    await Listing.deleteMany({}); // delete All Previous Data
    await Listing.insertMany(initdata);
    console.log("Data was Initialized");
};

start();


