import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAp5RheaOcKZGOEaWP1U-Z9DYo5hrGAcLs",
        authDomain: "jerga-todo-app-5e937.firebaseapp.com",
        databaseURL: "https://jerga-todo-app-5e937.firebaseio.com",
        storageBucket: "jerga-todo-app-5e937.appspot.com",
    };
    firebase.initializeApp(config);
}catch(e) {}


export var firebaseRef = firebase.database().ref();
export default firebase;
