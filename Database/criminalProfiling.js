require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function criminalProfiling() {
    // Connect to MongoDB locally
    mongoose.connect("mongodb+srv://Darshit:Darshit%404511@cluster0.pjmpacz.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));

    // mongoose.set("useFindAndModify", false);
}