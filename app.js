var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();
const port = 3000;
const route = require("./routes/route.js");

app.get('/',(req,res)=>{
    res.send("Hello");
});

mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',()=> {
    console.log("connected to MongoDB!");
});
mongoose.connection.on('erro',(err)=> {
    if(err){
        console.log("Error while connecting to MongoDB "+err);    
    }    
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.listen(port,()=>{
    console.log("Express server started at port: "+port);
});

