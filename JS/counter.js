
    //henter inn diven fra html
    let div = document.querySelector("#counterHere");
    //lager funksjonen counter som skal lage en nedtelling
    function counter() {
      //tiden nå
      let now = new Date().getTime();
      //dato jeg vil telle ned til
      let end = new Date(" February 9, 2019 00:00:01");
      let result = end-now;
      //for å gjøre resutet litt bedre gjør jeg om til dager, timer, minutter og sekunder
      let days = Math.floor(result/(1000*60*60*24));
      let hours = Math.floor((result%(1000*60*60*24) / (1000*60*60)));
      let minutes = Math.floor((result%(1000*60*60) / (1000*60)));
      let seconds = Math.floor((result% (1000*60) / (1000)));

      //for å vise resultatet
      div.innerHTML = days + "d " + hours + "t " + minutes + "min " + seconds + "s ";

      //hvis resutat blir mindre en null betyr det at dagen som telles ned tilhar vært
      if (result < 0) {
        clearInterval(call);
        div.innerHTML = "Datoen har vært, men det er bare å glede seg til neste år";
      }
    }
    //kaller på funksjoene hvert sekund
    let call = setInterval(function() {counter()}, 1000);
