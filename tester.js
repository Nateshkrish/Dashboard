// // var mysql = require('mysql');

// // var con = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "password"
// //   });

// //   var bId = 2;
// //   con.connect(function(err) {
// //     if (err) throw err;
// //     con.query("SELECT 3ad.beacons.beaconid FROM 3ad.locationData INNER JOIN 3ad.beacons WHERE 3ad.locationData.locationid = ?",bId, function (err, result, fields) {
// //       if (err) throw err;
// //       console.log(result);
// //     });
// //   });


// firebase.initializeApp({
//   databaseURL: "https://ad-webapp-ee28e.firebaseio.com/"
// });
// var refresh = function() {
//    const totalseats = 100;
//    //initializing big cirlce
//    var canvas = document.getElementById("Canvas");
//    var ctx = canvas.getContext("2d");
//    ctx.globalAlpha = 0.8;
//    var containerR = 200;
//    canvas.width = canvas.height = containerR * 2;
//    canvas.style["border-radius"] = containerR + "px";
   
//    ctx.clearRect(0,0,400,400);
//    //Firebase ref
//    var dbRef = firebase.database().ref("users");
//    dbRef.on("value", function(snapshot){
//    var totalcount =  snapshot.numChildren();

//    //size of the ball
//    var radius = 7;
//    snapshot.forEach(function(childSnapshot){
//       var x = Math.floor(Math.random()*300);  
//       var y = Math.floor(Math.random()*300);
      
//       const isviolate =  childSnapshot.val().isviolate;
//       if (isviolate == true){
//          ctx.beginPath();
//          ctx.arc(x,y,radius,Math.PI*2,0,false);
//          ctx.fillStyle = "red";
//          ctx.fill();
//          ctx.closePath(); 
//          console.log("isviolate", isviolate);
//       } 
//       else {
//          ctx.beginPath();
//          ctx.arc(x,y,radius,Math.PI*2,0,false);
//          ctx.fillStyle = "green";
//          ctx.fill();
//          ctx.closePath(); 
//          console.log("nothing is showed up");
//       }})
//       var Freeseats = totalseats - totalcount;
//       $('#dataVals').append(totalcount);
//       $('#dataVals2').append(Freeseats); 
//    })
//    }
//    refresh();
const {Firestore} = require('@google-cloud/firestore');


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ad-webapp-ee28e.firebaseio.com"
});


// Create a new client
const firestore = new Firestore();

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('/AdminUsers/AgeNqmSwcLKGv8cKIVEy');

//   // Enter new data into the document.
//   await document.set({
//     title: 'Welcome to Firestore',
//     body: 'Hello World',
//   });
//   console.log('Entered new data into the document');

//   // Update an existing document.
//   await document.update({
//     body: 'My first Firestore app',
//   });
//   console.log('Updated an existing document');

  // Read the document.
  const doc = await document.get();
  console.log('Read the document');

  // Delete the document.
//   await document.delete();
//   console.log('Deleted the document');
}
quickstart();

