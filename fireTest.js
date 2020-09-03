const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// redirect the login page credentials here for test
const username = 'admin'
const password = 'pikachu'
var flag = 0

// we can use this alternative too
const dataDB = db.collection('AdminUsers')

function testing(){
db.collection('AdminUsers').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      // username logic check for the fire store database
      if(doc.get('username')===username){
        if(doc.get('password')===password){
          // console.log('i am rendered')
          flag = 1
          console.log(flag)
        }
      }
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}

// testing()
console.log(testing())
//   db.collection('AdminUsers').doc('demoUsers')



// function getDialogue(){
//     //return a promise since we'll imitating an API call
//     return new Promise(function(resolve, reject) {
//     resolve({
//         "quote":"I'm Batman",
//         "author":"Batman"
//     });
//     })
//     }

//     getDialogue().then(result =>{
//         console.log(result);
//         const obj = result;
//         const quoteData = {
//            quote: obj.quote,
//            author: obj.author
//      };
//         return db.collection('sampleData').doc('inspiration')
//         .set(quoteData).then(() =>
//         console.log('new Dialogue written to database')
        
//         );
//      });

    //  console.log(db.collection('AdminUsers').doc('AgeNqmSwcLKGv8cKIVEy').get())