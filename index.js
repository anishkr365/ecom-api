const express = require("express");
const db = require('./config/mongoose')

const port = process.env.PORT||8000;

const app = express();
const cors = require("cors");
app.use(cors())

// it will help to parse the body
app.use(express.urlencoded({extended:true}));

// to see in what is the request url remove in production
app.use((req,res,next)=>{
    console.log("requesting for   :",req.url);
    next();
})
// it is entry to all the routes
app.use('/',require('./routes'))


// this server start listening here
app.listen(port, (error) => {
    if (error) console.log("server connection ERROR", error);
    else {
        console.log("visit application by",'\x1b[36m"CTL+Click"\x1b[0m');
        console.log('\x1b[33m%s\x1b[0m', `http://localhost:${port}`);  //yellow
    }
  });