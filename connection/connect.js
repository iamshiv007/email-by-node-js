const mongoose = require('mongoose')

// Database
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database")

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb