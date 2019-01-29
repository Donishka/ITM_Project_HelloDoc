const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');

router.post("/addDoctor", function (req, res) {

    const doctorData = [
        req.body.docRegNumber,
        req.body.docField,
        req.body.designation,
        req.body.wordAddress,
        req.body.nic,

    ]
    console.log(JSON.stringify(doctorData));
    database.addDoctor(doctorData, function (err, result) {
        if (err) {
            console.log(err);
            if(err.sqlState =="23000"){
                res.json({success : false , msg : "already registerd"});
                return;
            }
            res.json({ success: false, msg: "something wrong please try again" });
        }
        else {
            res.json({ success: true, msg: "Doctor added" });
        }
    });
})

module.exports = router;