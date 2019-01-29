const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const database = require ('./databaseHandle/connectDatabase');
const app = express();
const http = require('http');

// const users = require('./routes/users');
// const card = require('./routes/card');
// const subject = require('./routes/subject');
// const attendance = require('./routes/attendance');
// const classes = require('./routes/class');
// const notification = require('./routes/notification')


const role = require('./routes/role')
const users = require('./routes/users')
const mlt = require('./routes/mlt')
const patient = require('./routes/patient')
const doctor = require('./routes/doctor')
const frontdesk = require('./routes/frontdesk')
const patientbasichealthinfo = require('./routes/patientbasichealthinfo')
const labreport = require('./routes/labreport')
const appointment = require('./routes/appointment')
const diseasedetail= require('./routes/diseasedetail')
const prescription= require('./routes/prescription')
const appSchedule= require('./routes/appSchedule')

const myRoute = require('./routes/myRoute');


//set port
const port = process.env.PORT || 3000;
// connect to database
database.connet();
// cors middleware
app.use(cors());

//set static folder
app.use (express.static(path.join(__dirname,'public')));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// passport middle ware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


// //Set users
// app.use('/users',users);
// // Set card
// app.use('/card',card);

// // Set subject
// app.use('/subject',subject);

// // Set subject route
// app.use('/attendance',attendance);

// // Set class route
// app.use('/class',classes);

// // Set class notification
// app.use('/notification',notification);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
    next()
})

// app.get('/', (req, res, next) => {
//     console.log("index route");
//     res.status(200).json({
//         state: true
//     })
// })
// index route
app.get('/',function(req,res){
    console.log("index route called");
    res.status(200).json({
        Message: "Hello"
    });
});

app.use('/role',role);
app.use('/users',users);
app.use('/mlt',mlt);
app.use('/patient',patient);
app.use('/doctor',doctor);
app.use('/frontdesk',frontdesk);
app.use('/patientbasichealthinfo',patientbasichealthinfo);
app.use('/labreport',labreport);
app.use('/appointment',appointment);
app.use('/diseasedetail',diseasedetail);
app.use('/prescription',prescription);
app.use('/appSchedule',appSchedule)

app.use('/myRoute', myRoute);


app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
}); 

app.listen(port, () => console.log('Server started at port :'+ port));

module.exports = app;