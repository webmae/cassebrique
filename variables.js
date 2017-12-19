			var c = document.getElementById("mon_canvas");
			var ctx = c.getContext("2d");
			
			var intervalID=0;
			
			var x = 100;
			var y = 100;
			var dx = 4;
			var dy = 8;
			
			var hauteur_canvas = 400;
			var largeur_canvas = 400;
			
			var jeuDemarre = false;		/* si true, une partie est déjà démarrée */

		/* PALETTE */		
			var position_palette = largeur_canvas/2;
			var hauteur_palette = 20;
			var largeur_palette = 50;
			var x_palette = position_palette-(largeur_palette/2);
			
		/* GESTION CLAVIER */	
			var FLECHE_GAUCHE = 37;
			var FLECHE_DROITE = 39;
			var BARRE_ESPACE = 32;
			var flecheGaucheEnfoncee=false;
			var flecheDroiteEnfoncee=false;
			var barreEspaceEnfoncee=false;
		
		/* GESTION SOURIS */
			/* coin supérieur gauche du canvas */
			var minX = 0;
			var minY = 0;
			/* coin inférieur droit du canvas */
			var maxX = 0;
			var maxY = 0;
			
		/* BRIQUES */
			var briques;
			var nombreLignes;
			var nombreColonnes;
			var espacementBrique;
			var hauteurBrique;
			var largeurBrique;
			var briques_restantes;
			
			var ligne;
			var colonne;
			var yLigne;
			var xColonne;
			
		/* SONS */
			var sonPalette = new Audio("sons/sonPalette.ogg");
			var sonMur = new Audio("sons/sonMur.ogg");
			var sonBrique = new Audio("sons/sonBrique.ogg");
			var sonBravo = new Audio("sons/sonBravo.ogg");
			var sonPerdu = new Audio("sons/sonPerdu.ogg");
			
