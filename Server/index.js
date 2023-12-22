const express = require('express');
const app = express();

app.use((req,res,next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})
app.use(express.json());
const cors = require('cors');
app.use(cors());
require('./db/connection');
const Patient = require('./Models/patient');
const Request = require('./Models/request');
try{
    app.post('/', async(req,res) => {
        let patient = new Patient(req.body);
        console.log("Data recieved on server : ", req.body);
        let results = await patient.save();
        console.log('Data saved : ', results);
        res.send({message : 'Success'});
        console.log('Data Saved : ', results);
    });
    app.post('/ContactUs', async(req,res) => {
        let request = new Request(req.body);
        console.log("Data recieved on server : ", req.body);
        let result = await request.save();
        console.log('Data saved : ', result);
        res.send({message : 'Success'});
        console.log('Data Saved : ', result);
    });
}catch(err){
    console.error('Error:', err.message);
     res.status(500).send({ error: 'Internal Server Error' });
 }
 app.get('/', async (req,res) => {
    try{
       const request = await  Request.find();
       console.log('Data fetched: ', request);
       res.json(request);
 
    }catch(err){
       console.error('Server-side Error:', err.message);
       res.status(500).send({ error: 'Internal Server Error' });
    }
 });
app.get('/Home', async(req, res) => {
    try{
        const patients = await Patient.find();
    console.log('data recieved : ', patients);
    res.json(patients);
    }catch(err){
        console.error('Server-side Error:', err.message);
      res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.get('/ContactUs', async(req, res) => {
    try{
        const request = await Request.find();
    console.log('data recieved : ', request);
    res.json(request);
    }catch(err){
        console.error('Server-side Error:', err.message);
      res.status(500).send({ error: 'Internal Server Error' });
    }
})
app.listen(4002, () => {
    console.log('Server is listening at port 4002');


})