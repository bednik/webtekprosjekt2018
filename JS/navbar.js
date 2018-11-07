<<<<<<< HEAD
let content = document.querySelector('link[rel="import"]').import;
let el = content.querySelector('.navbar');
=======
// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
let link = document.querySelector('link[rel="import"]')
let content = link.import;
let el = content.querySelector(".navbar");
var x = document.getElementById("navbar-wrapper");
const con = x.innerHTML;
x.innerHTML = "<nav class='navbar'>" +
   "<button onclick='toggleNavigation()' id='hamburger'><img src=''../IMG/hamburger_icon.png'></button>" +
    "<ul id='navContent'>" +
        "<li id='logo'>" +
            "<a href='../index.html'>Diavola Calabrese</a>" +
        "</li>" +
        "<li class='rightnav'>" +
            "<a href='../Pages/contact.html'>KONTAKT</a>" +
      " </li>" +
        "<li class='rightnav'>" +
            "<a href='../Pages/cooking.html'>TILBEREDNING</a>" +
        "</li>" +
        "<li class='rightnav'>" +
            "<a href='../Pages/reviews.html'>OMTALER</a>" +
        "</li>" +
        "<li class='rightnav'>" +
            "<a href='../Pages/about.html'>OM PIZZAEN</a>"+
        "</li>" +
        "<li class='rightnav'>" +
            "<a href='../index.html'>HJEM</a>" +
        "</li>" +
    "</ul>" + "</nav>"

>>>>>>> dev
document.body.appendChild(el.cloneNode(true));

// Toggle-funksjon for navbar (Kun for mobil)
let navToggled = false;
navbarContent = document.getElementById("navContent");

function toggleNavigation() {
    if (!navToggled) {
        navToggled = true;
        navbarContent.style.display = "block";
    } else {
        navToggled = false;
        navbarContent.style.display = "none";
    }
}
