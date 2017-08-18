import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC-bpdoymjEN1F4f_svTADjpOVAj1gVnfo",
    authDomain: "pomodoro-timer-265f3.firebaseapp.com",
    databaseURL: "https://pomodoro-timer-265f3.firebaseio.com",
    projectId: "pomodoro-timer-265f3",
    storageBucket: "pomodoro-timer-265f3.appspot.com",
    messagingSenderId: "976105244879"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
