localStorage.getItem("user_name", user_name);
document.getElementById("welcome");
console.log("welcome");

const firebaseConfig = {

    apiKey: "AIzaSyBSmIv6iiTGnLbHdzRGoifpSd8wdjDc5Ks",
  
    authDomain: "kwitter-c965b.firebaseapp.com",
  
    databaseURL: "https://kwitter-c965b-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-c965b",
  
    storageBucket: "kwitter-c965b.appspot.com",
  
    messagingSenderId: "367987073058",
  
    appId: "1:367987073058:web:8c5f232f5bec5a8f43ea7b"
  
  };
  
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - "+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}