const express = require('express')
const multer = require('multer')
const cors = require('cors')


const app = express()

app.use(cors({
    origin:"*"
}))
app.use(express.json())


app.get('/',(req,res) => {
    res.send("hello world")
})


app.listen("8000",() => {
    console.log("server listening on port 8000")
})


