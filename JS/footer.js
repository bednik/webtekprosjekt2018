// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
var content = document.querySelector('link[rel="import"]').import;
var el = content.querySelector('.footer');
document.body.appendChild(el.cloneNode(true));