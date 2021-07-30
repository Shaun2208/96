 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCDTOsNqeLf-mrb3VSqu1W8YZvp1ZjBN1E",
    authDomain: "lets-chat-web-app-2c6b8.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2c6b8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2c6b8",
    storageBucket: "lets-chat-web-app-2c6b8.appspot.com",
    messagingSenderId: "979168899056",
    appId: "1:979168899056:web:65862af445cf6d5a0c7735"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}