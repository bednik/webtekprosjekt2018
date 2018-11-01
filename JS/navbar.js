// Toggle-funksjon for navbar (Kun for mobil)
var navToggled = false;
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

// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
var content = document.querySelector('link[rel="import"]').import;
var el = content.querySelector('.navbar');
document.body.appendChild(el.cloneNode(true));