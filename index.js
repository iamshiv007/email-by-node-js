const express = require('express')
const app = express()

app.use(express.json())

// Database
const connectDb = require('./connection/connect')
connectDb()

// routes
const router = require('./routes/router')
app.use('/api', router)

// Server
const port = process.env.PORT || 6060

app.listen(port, () => {
    console.log(`Server is listen on port ${port}`)
})

// test 
app.get('/', (req, res) => {
    res.json({ name: "Your Name" })
})