// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
let content = document.querySelector('link[rel="import"]').import;
let el = content.querySelector('.navbar');
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
