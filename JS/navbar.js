// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
let navbar = "<nav class=\"navbar\">\n" +
    "    <div class=\"mobileContainer\">\n" +
    "        <button onclick=\"toggleNavigation()\" class=\"hamburger\"><img src=\"IMG/hamburger_icon.png\"></button>\n" +
    "        <div class=\"logoContainer\">\n" +
    "            <a class=\"logo\" href=\"index.html\">Diavola Calabrese</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"navContentContainer\">\n" +
    "        <ul class=\"navContent navHidden\" id=\"navContent\">\n" +
    "            <li>\n" +
    "                <a class=\"link\" href=\"index.html\">HJEM</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a class=\"link\" href=\"about.html\">OM PIZZAEN</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a class=\"link\" href=\"reviews.html\">OMTALER</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a class=\"link\" href=\"cooking.html\">TILBEREDNING</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a class=\"link\" href=\"contact.html\">KONTAKT</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n";

let navbarElement = document.getElementById("navbar-wrapper");
navbarElement.innerHTML = navbar

// Toggle-funksjon for navbar (Kun for mobil)
let navToggled = false;
navbarContent = document.getElementById("navContent");

function toggleNavigation() {
    if (!navToggled) {
        navToggled = true;
        navbarContent.classList.remove("navHidden");
    } else {
        navToggled = false;
        navbarContent.classList.add("navHidden");
    }
}
