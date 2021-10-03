require ('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get("/", (req, res) =>{

    res.send("This is home page")
})

app.listen(PORT, () =>[

    console.log(`Server is running successfully at http://localhost:${PORT}`)
])