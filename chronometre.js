var minutes=0;
var secondes=0;
var dixiemes=0;

var monChrono;				/* contient l'identifiant du chronomètre */

var dejaDemarre = false;	/* un chronomètre est déjà démarré si valeur à true */

function afficheChrono() {
	/* placer la valeur des dixiemes de secondes dans le <span> avec id="dixiemes" */
	/* document.getElementById("dixiemes").innerHTML = dixiemes */
	$("#dixiemes").html(dixiemes);
	/* placer la valeur des secondes dans le <span> avec id="secondes" */
	/* document.getElementById("secondes").innerHTML = secondes */
	$("#secondes").html(secondes);
	/* placer la valeur des minutes dans le <span> avec id="minutes" */
	/* document.getElementById("minutes").innerHTML = minutes */
	$("#minutes").html(minutes);
}

function Chrono() {
	dixiemes++;
	
	if (dixiemes>9) {
		dixiemes=0;
		secondes++;
	}
	
	if (secondes>59) {
		secondes=0;
		minutes++;
	}
	
	monChrono = setTimeout(Chrono,100);		/* on attend l'écoulement de 100 msec pour relancer la même fonction */
	dejaDemarre = true;
	
	afficheChrono();
}

function startChrono() {
	if (dejaDemarre==false) Chrono();
}

function stopChrono() {
	clearTimeout(monChrono);
	dejaDemarre = false;
}

function razChrono() {
/* Remise à zéro du chronomètre */	
	minutes=0;
	secondes=0;
	dixiemes=0;
	
	dejaDemarre = false;
	
	afficheChrono();
}

window.onload = razChrono;