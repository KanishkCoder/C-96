import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCXtIGmbb-jEQ60Mo5e76FgPcgnvNsN5D4",
  authDomain: "story-book-online-app.firebaseapp.com",
  databaseURL: "https://story-book-online-app-default-rtdb.firebaseio.com",
  projectId: "story-book-online-app",
  storageBucket: "story-book-online-app.appspot.com",
  messagingSenderId: "434074468850",
  appId: "1:434074468850:web:2e91714df0cf9943b2ab6b"
};

let app = firebase.initializeApp(firebaseConfig)
export default app.database();