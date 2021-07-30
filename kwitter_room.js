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

  User_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ User_name;

  function addRoom(){
        console.log(Room_name);
    Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
          purpose: "adding room name"
    });
  localStorage.setItem("Room_name",Room_name);
  window.location = "kwitter_page.html"    
}

function getData() {
  firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log (Room_names);
row = "<div class = 'room_name' id = '"+Room_names+"' onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();

function redirectToRoomName(name){
      console.log(name);
localStorage.setItem("Room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location = "index.html";
}
