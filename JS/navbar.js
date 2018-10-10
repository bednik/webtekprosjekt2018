var content = document.querySelector('link[rel="import"]').import;
var el = content.querySelector('.navbar');
document.body.appendChild(el.cloneNode(true));