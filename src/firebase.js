import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDlETmAwqi6UF6NfrRc8648z0RWtmFHlP8",
    authDomain: "whatsapp-2c964.firebaseapp.com",
    databaseURL: "https://whatsapp-2c964.firebaseio.com",
    projectId: "whatsapp-2c964",
    storageBucket: "whatsapp-2c964.appspot.com",
    messagingSenderId: "980722686226",
    appId: "1:980722686226:web:b8d4654cfe34c529663bcb",
    measurementId: "G-S6R1TKE4EZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
