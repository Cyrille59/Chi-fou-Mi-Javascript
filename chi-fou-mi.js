var choix=0;
var ordi;
var scorevous=0;
var scoreordi=0;



document.getElementById("pierre").addEventListener("click", function(){
    choix=1;
    ordi=(Math.random()*3)+1;
    ordi=Math.floor(ordi);



    if  (ordi==1) {

        document.getElementById("result").innerHTML="Egalité !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(rock).png";


    }if (ordi==2) {

        document.getElementById("result").innerHTML="Vous avez Perdu !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(paper).png";
        scoreordi++;
        document.getElementById("scorordi").innerHTML="Score ordi : <br>"+scoreordi;

    }if (ordi==3) {

        document.getElementById("result").innerHTML="Vous avez Gagné !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(scissors).png";
        scorevous++;
        document.getElementById("scorvous").innerHTML="Votre score : <br> "+scorevous;
    }
});

document.getElementById("feuille").addEventListener("click", function(){
    choix=2;
    ordi=(Math.random()*3)+1;
    ordi=Math.floor(ordi);

    if  (ordi==1) {

        document.getElementById("result").innerHTML="Vous avez Gagné !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(rock).png";
        scorevous++;
        document.getElementById("scorvous").innerHTML="Votre score : <br> "+scorevous;

    }if (ordi==2) {

        document.getElementById("result").innerHTML="Egalité !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(paper).png";

    }if (ordi==3) {

        document.getElementById("result").innerHTML="Vous avez Perdu !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(scissors).png";
        scoreordi++;
        document.getElementById("scorordi").innerHTML="Score ordi : <br>"+scoreordi;
    }

});

document.getElementById("ciseaux").addEventListener("click", function(){
    choix=3;
    ordi=(Math.random()*3)+1;
    ordi=Math.floor(ordi);

    if  (ordi==1) {

        document.getElementById("result").innerHTML="Vous avez Perdu !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(rock).png";
        scoreordi++;
        document.getElementById("scorordi").innerHTML="Score ordi : <br>"+scoreordi;

    }if (ordi==2) {

        document.getElementById("result").innerHTML="Vous avez Gagné !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(paper).png";
        scorevous++;
        document.getElementById("scorvous").innerHTML="Votre score : <br> "+scorevous;

    }if (ordi==3) {

        document.getElementById("result").innerHTML="Egalité !";
        document.getElementById("ordi").src="assets/img/Rock-paper-scissors_(scissors).png";
    }

});












