
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCuGsN8vl_l6q7WrI7ImdpVFiFGIz0M2c4",
  authDomain: "kwitter-c1d89.firebaseapp.com",
  databaseURL: "https://kwitter-c1d89-default-rtdb.firebaseio.com",
  projectId: "kwitter-c1d89",
  storageBucket: "kwitter-c1d89.appspot.com",
  messagingSenderId: "923241494239",
  appId: "1:923241494239:web:c4e863e6b60e0b21919b6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}