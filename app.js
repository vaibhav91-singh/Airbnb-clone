const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const initdata = require('./init/data')
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
// data base setup


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "Static"))); // for CSS/assets
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const MONGO_URL =
    process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/majorprojectvaibhav'

async function start() {
    try {
        await mongoose.connect(MONGO_URL)
        console.log('connected to DB')
        // Initialize DB with sample data
        await initDB()
    } catch (err) {
        console.error('DB connection error:', err)
        process.exitCode = 1
        return
    }
}

const initDB = async () => {
    try {
        await Listing.deleteMany({}) // delete All Previous Data
        // console.log('Data length:', initdata.length);
        await Listing.insertMany(initdata);
        console.log("Data was Initialized");
    } catch (err) {
        console.error('Init DB error:', err);
    }
}

// API  

app.get('/', (req, res) => {
    res.render("layout/Home.ejs");
})

// send to Alllisting.ejs
app.get('/listings', async (req, res) => {
    try {
        const listings = await Listing.find({});
        res.render("Allisting", { alllistings: listings });
        // here we send listings data to ejs file {} useing this
    } catch (err) {
        res.status(500).send("Error fetching listings");
    }
})



// new litings added from here

// 1. New Route (MUST BE FIRST)
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// 2. Show Route

app.get("/listings/:id", async (req, res) => {
    const { id } = req.params; //take id from html
    const listing = await Listing.findById(id); //find id in dtabase apply query
    res.render("listings/show.ejs", { listing }); //send id to show.ejs
});

// create add new listings
// 1. Route to show the form
app.get("/listings/new", (req, res) => {
    res.render("new.ejs");
});

// 2. Route to handle the form submission
app.post("/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    } catch (e) {
        res.send("Error: " + e.message);
    }
});
// add new listing end here


// Edit all Listing
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    // req.body.listing works if your input names are listing[title], etc.
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});

// edit end here  ------

app.get('/listing', async (req, res) => {
    let samplelisting = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 12000,
        location: "Goa",
        country: "India",
    });
    await samplelisting.save();
    console.log("sample was saved in to Db");
    res.send("successful testing of listening");
})

























































app.listen(8080, () => {
    console.log('Server is Listening at port:8080')
})

start()
