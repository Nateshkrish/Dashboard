var express = require('express')
var router = express.Router();

// firebaseDB alias firestore
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


router.get('/',function(req,res,next){
    res.render('admin');
});


router.get('/auth',function(req,res,next){
  db.collection('AdminUsers').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      // username logic check for the fire store database
      if(doc.get('username')===req.query.username){
        if(doc.get('password')===req.query.password){
          // console.log('i am rendered')
          // res.send('access granted')
          res.render('dash-2')
        }
        // else{
        //   res.send('invalid password')
        // }
      }


    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
});


module.exports = router;