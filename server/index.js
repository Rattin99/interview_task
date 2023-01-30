const express = require('express')
const multer = require('multer')
const cors = require('cors')


const app = express()


app.use(cors({
    origin:"*"
}))


app.use(express.json({
    limit: '50mb'
}))




app.get('/',(req,res) => {
    res.send("hello world")
})

app.post('/upload',(req,res) => {
  
    console.log(req.body.payload)

    res.send(JSON.stringify('call asche'))
})


app.listen("8000",() => {
    console.log("server listening on port 8000")
})


