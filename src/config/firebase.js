const { initializeApp } = require('firebase/app');
const admin = require('firebase-admin');
require('dotenv').config();
const serviceAccount =  JSON.parse(process.env.FIREBASE_CREDENTIALS);

const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_DOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_SENDERID,
  appId: process.env.FB_APPID
};

// Inicializa Firebase App
const firebaseapp = initializeApp(firebaseConfig);

// Inicializa Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://poke-ecommerce-default-rtdb.europe-west1.firebasedatabase.app"
});

module.exports = { firebaseapp, admin };