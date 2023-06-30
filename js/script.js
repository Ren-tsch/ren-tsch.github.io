$(function(){
    $("#navbar").load("./komponenten/navbar.html"); 
  });

$(function(){
  $("#footer").load("./komponenten/footer.html"); 
});


$(document).ready(function() {
  $('#navbar').load("../komponenten/navbar.html");
});


$(document).ready(function() {
  $('#footer').load("../komponenten/footer.html");
});

var currentUrl = window.location.pathname;

var links = document.querySelectorAll('nav ul li a');
links.forEach(function(link) {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active-link');
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var mailtoLink = "mailto:anjalebensfreude@gmx.de" +
      "?subject=Neue Nachricht vom Website-Formular" +
      "&body=" + encodeURIComponent("Name: " + name + "\nE-Mail: " + email + "\n\nNachricht: " + message);

  window.location.href = mailtoLink;

  document.getElementById("name").value = "";
  email = document.getElementById("email").value = "";
  message = document.getElementById("message").value = "";
});

