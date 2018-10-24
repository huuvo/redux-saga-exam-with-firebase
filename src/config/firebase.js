import firebase from "firebase/app"
import "firebase/database"

var config = {
    apiKey: "AIzaSyC0lGW67F2h7Q82OsZnRZ6Zs7MsQ4FKWrg",
    authDomain: "redux-saga-exam.firebaseapp.com",
    databaseURL: "https://redux-saga-exam.firebaseio.com",
    projectId: "redux-saga-exam",
    storageBucket: "redux-saga-exam.appspot.com",
    messagingSenderId: "410984231922"
};
const fire = firebase.initializeApp(config);
export default fire;