function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var modal = document.getElementById("mySidenav");

// Get the button that opens the modal
var btn = document.getElementById("openNav");

window.onclick = function(event) {
  if (event.target == document.getElementById("mySidenav")) {
    document.getElementById("mySidenav").style.width = "0";
  }
}

