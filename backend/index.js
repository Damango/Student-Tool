const express = require('express')

const mysql = require('mysql')
const mongoose = require('mongoose')







const app = express();



app.use(express.json())





mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', (error) => { console.log(error) })
db.once('open', () => { console.log("-- CONNECTED --") })







const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const studentsRouter = require('./students.js')
app.use('/students', studentsRouter)

app.listen(5000, () => { console.log("Server Started") })








app.get('/api', async (req, res) => {



})







app.post('/accounts/', (req, res) => {

    //students.push(req.body)

    res.json(req.body)


})







//console.log(myModule)





