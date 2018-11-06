// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
let content = document.querySelector('link[rel="import"]').import;
let el = content.querySelector('.footer');
document.body.appendChild(el.cloneNode(true));
