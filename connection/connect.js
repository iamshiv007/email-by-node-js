const mongoose = require('mongoose')

// Database
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log("Connected to database")

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb