var tekst1 = "hallo";
var tekst2 = "hei";

var svar=tekst1+tekst2;

document.getElementById("oppgave1").innerHTML = "Oppgave 1 blir " + svar

function knappPhonk() {
    var riktigTall = parseFloat(document.getElementById("riktigTall1").value);
    var resultat = document.getElementById("oppgave2")

    if (riktigTall < 0) {
        resultat.innerHTML = riktigTall + " er negativt"
    } else {
        resultat.innerHTML = riktigTall + " er positivt"
    }
}

function knappPhonk1() {
    var riktigTall2 = parseFloat(document.getElementById("number2").value);
    var riktigTall3 = parseFloat(document.getElementById("number3").value);
    var resultat2 = document.getElementById("oppgave3");

    if (riktigTall3>riktigTall2) {
        resultat2.innerHTML = riktigTall3 + " er større enn " + riktigTall2
    }  else if (riktigTall2>riktigTall3) {
        resultat2.innerHTML = riktigTall2 + " er større enn " + riktigTall3
    } else {
        resultat2.innerHTML = "De er like store"
    }
}

function knappPhonk2() {
    var riktigTall4 = parseFloat(document.getElementById("number4").value);
    var riktigTall5 = parseFloat(document.getElementById("number5").value);
    var riktigTall6 = parseFloat(document.getElementById("number6").value);
    var resultat3 = document.getElementById("oppgave4");

    var størstTall = Math.max(riktigTall4, riktigTall5, riktigTall6);

    resultat3.innerHTML = størstTall + " er størst"
}


function knappPhonk3() {
    var riktigScore = parseFloat(document.getElementById("score").value);
    var riktigNavn = document.getElementById("navn").value;
    var resultat4 = document.getElementById("oppgave5")

    if (riktigScore<50) {
        resultat4.innerHTML = riktigNavn + " besto ikke"
    } else {
        resultat4.innerHTML = riktigNavn + " besto"
    }
}

function knappPhonk4() {
    var riktigUkeDag = parseFloat(document.getElementById("ukeDag").value);
    var resultat5 = document.getElementById("oppgave6");

    if (riktigUkeDag == 1) {
        resultat5.innerHTML = "Det er mandag"
    } else if (riktigUkeDag == 2) {
        resultat5.innerHTML = "Det er tirsdag"
    }
     else if (riktigUkeDag == 3) {
        resultat5.innerHTML = "Det er onsdag"
    }
     else if (riktigUkeDag == 4) {
        resultat5.innerHTML = "Det er torsdag"
    }
     else if (riktigUkeDag == 5) {
        resultat5.innerHTML = "Det er fredag"
    }
     else if (riktigUkeDag == 6) {
        resultat5.innerHTML = "Det er lørdag"
    }
     else if (riktigUkeDag == 7) {
        resultat5.innerHTML = "Det er søndag"
    }
}

function knappPhonk5() {
    var riktigTemp = document.getElementById("temp").value;
    var resultat6 = document.getElementById("oppgave7");
    var nyTemp = riktigTemp*1.8+32;

    resultat6.innerHTML = riktigTemp + " C blir til " + nyTemp + " F";
}