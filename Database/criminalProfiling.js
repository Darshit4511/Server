require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function criminalProfiling() {
    // Connect to MongoDB locally
    mongoose.connect("mongodb://localhost:27017/ssip", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));

    mongoose.set("useFindAndModify", false);
}