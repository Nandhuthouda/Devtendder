const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://nandhuthouda:nandhudb@devtinder.z4fxpa2.mongodb.net/devtinder",
    );
};

module.exports = connectDB;
