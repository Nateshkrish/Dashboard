var express = require('express')
var router = express.Router();


router.get('/',function(req,res,next){
    res.render('dash-2',{'username':'ash ketchum','location':'BMH'});
});

// cloud RTDB
var firebase = require("firebase");
// firebase.initializeApp({
//   databaseURL: "https://ad-webapp-ee28e.firebaseio.com/"
// });

var dbRef = firebase.database().ref("users");

// cafeteria
router.get('/cafeteria',function(req,res,next){
    console.log('i am invoked');
    res.render('dash-2',{'username':'ash Ketchum', 'location':'cafeteria'});
});


// 1st floor
router.get('/1f',function(req,res,next){
    res.render('dash-2',{'username':'ash Ketchum', 'location':'first floor'});
});


module.exports = router;
