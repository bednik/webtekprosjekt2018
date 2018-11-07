// Kjører funksjonen checkIfLoaded hvert 2. sekund
var check = setInterval(checkIfLoaded, 2000)
// Tallet 2000 angir hvor ofte (ms) det skal sjekkes om siden er lastet.
// 2000 er satt bare for å simulere lang innlastningstid, for å vise scriptet.
// Et lavere tall, f. eks. 100, vil være optimalt, fordi det vil som regel ta
// kjappere tid enn 2 sekunder å laste inn siden.

function checkIfLoaded() {
  // Sjekker om siden er lastet inn
  if (document.readyState === "complete") {
    // Stopper intervallet som kjører funksjonen
    clearInterval(check);
    // Legger til fade out-animasjonen på loadingscreenet, som varer i 0.5 sek
    document.getElementById("loadingscreen").style.animation = "fadeout 0.5s";

    // Fjerner loadingscreenet etter 0.45 sek
    setTimeout(function() {
      document.getElementById("loadingscreen").style.display = "none";
    }, 450)
  }
}
