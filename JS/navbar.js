// Toggle-funksjon for
function toggleNavigation() {

}

// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
var content = document.querySelector('link[rel="import"]').import;
var el = content.querySelector('.navbar');
document.body.appendChild(el.cloneNode(true));