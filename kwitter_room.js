
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCTkXbe9RiHuDu731eHRPBqXYaeNdZjU_I",
      authDomain: "kwitter-dbdf5.firebaseapp.com",
      databaseURL: "https://kwitter-dbdf5-default-rtdb.firebaseio.com",
      projectId: "kwitter-dbdf5",
      storageBucket: "kwitter-dbdf5.appspot.com",
      messagingSenderId: "323857387784",
      appId: "1:323857387784:web:7a8a94eaed6774590bdcbd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!!!!!!!!!!";

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names =childKey;
      //Start code
      row= "<div class='room_name' id="+ Room_names+ "onclick='redirectToRoomName(this.id)'>Room="+ Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}