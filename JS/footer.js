// Importer navbaren. Skriptet plasseres der man vil at navbaren skal være.
let footervar = "<footer id=\"footer\">\n" +
    "    <div>\n" +
    "        <div id=\"copyright\">&copy; 2018 Diavola Calabrese</div>\n" +
    "        <div id=\"footer_contact\">oetker@oetker.no&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;668 23 420</div>\n" +
    "    </div>\n" +
    "</footer>\n";

let element = document.getElementById("footer");
element.innerHTML = footervar
