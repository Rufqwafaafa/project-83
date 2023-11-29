var firebaseConfig = {
  apiKey: "AIzaSyB8MOHqZ3M9-qzGg6DCfSk5TiFXWOt1GXg",
  authDomain: "kwitter-3cc7b.firebaseapp.com",
  databaseURL: "https://kwitter-3cc7b-default-rtdb.firebaseio.com",
  projectId: "kwitter-3cc7b",
  storageBucket: "kwitter-3cc7b.appspot.com",
  messagingSenderId: "72028596559",
  appId: "1:72028596559:web:69448aaf23c1269d6d3d3a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
