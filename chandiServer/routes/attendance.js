const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');
const moment = require('moment');
const momentTz = require('moment-timezone');

router.post('/markAttendance',function(req,res,next){
    const cardId = req.body.uid;
    const deviceId = req.body.deviceId;
    const today = momentTz.tz(new Date(), "Asia/Colombo");
    // const today = momentTz("2013-11-18 07:55");
    const date = today.day();
    const minTime = moment(today).subtract(30, "minutes").format("hh:mm");
    const maxTime = moment(today).add (60, "minutes").format("hh:mm");
    var UserId = null
    var thisTimeClass = null
    //console.log(date);
    //console.log(minTime);
    //console.log(maxTime);
    //find student relavant to nuId (with NuId)
     database.SelectStudentWithCardId(cardId,function(err,result){
        if (err){
            res.json({success : false , massage : "Error something wrong"});
        }
        else{
            if(result.length !=0){
                UserId = result[0].UserId;
                database.getClassIdForAttendance(UserId,deviceId,minTime,maxTime,date,function(err,result){
                    if (err)
                    {
                        console.log(err);
                    }
                    else{
                        if(result.length != 0){
                            //console.log(result);
                            var data = [
                                DeviceId = deviceId,
                                UId = UserId,
                                ClassId = result[0].classID,
                                atDate = today.format("YYYY-MM-DD"),
                                InTime = today.format("HH:mm")
                            ]
                            database.addAttendaceRecord(data,function(err,result){
                                if (err){
                                    if (err.sqlState == '23000') {
                                        res.json({ success: false, msg: 'Attendance Alredy marked' });
                                        return false;
                                    }
                                    else{
                                        res.json({ success: false, msg: 'System Error'});
                                    }
                                }
                                else{
                                    res.json({ success: true, msg: 'Attendance Added'});
                                }
                            })
                        }
                        else{
                            res.json({success : false , massage : "unauthorized access"});
                        }
                        
                    }
                });
            }
            else{
                res.json({success : false , massage : "Error No User Found"});
            }         
        } 
    });
    //find class ongoing in this class room now(With device Id and date)
    //find this student is enroled this class
    //mark attendance
});

router.get("/getAttendance",function(req,res,next){
    const UserId = req.body.UserId;
    const classID = req.body.ClassId;
    database.getAttendance(UserId , function(err,result){
        if(err){
            res.json({success : false , massage : "Error something wrong"});
        }
        else{
            res.json({success : true , data : result});
        }
    });
});
module.exports = router;