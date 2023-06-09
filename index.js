const express = require('express')

const app = express()

app.use(express.json())

// Server
const port = process.env.PORT || 6060

app.listen(port, () => {
    console.log(`Server is listen on port ${port}`)
})

// test 
app.get('/', (req, res) => {
    res.json({ name: "Your Name" })
})