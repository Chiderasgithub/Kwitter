
var firebaseConfig = {
  apiKey: "AIzaSyD1Adu0nKsdGqSMzBzrLJiFCgUVYA1iq1A",
  authDomain: "kwitter-92bed.firebaseapp.com",
  databaseURL: "https://kwitter-92bed-default-rtdb.firebaseio.com",
  projectId: "kwitter-92bed",
  storageBucket: "kwitter-92bed.appspot.com",
  messagingSenderId: "379848468359",
  appId: "1:379848468359:web:25e16a6c73dd874fbb1522"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);             
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.Location = "kwitter.html";
}