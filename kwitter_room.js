var firebaseConfig = {
    apiKey: "AIzaSyAcFkt34NV0H1kQGeK5YuuaDjSB8pziXwM",
    authDomain: "kwitter-app-20b0b.firebaseapp.com",
    projectId: "kwitter-app-20b0b",
    storageBucket: "kwitter-app-20b0b.appspot.com",
    messagingSenderId: "317881115249",
    appId: "1:317881115249:web:1bdf88a26be702f11ef1d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
