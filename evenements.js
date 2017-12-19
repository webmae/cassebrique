			/* Que faire quand on presse une touche du clavier ? */
			function onKeyDown(evenement) {
				/*console.log("keydown = " + evenement.keyCode);*/
			/*	if (evenement.keyCode == 39) flecheDroiteEnfoncee = true;
				else if (evenement.keyCode == 37) flecheGaucheEnfoncee = true; */
				switch(evenement.keyCode) {
					case FLECHE_GAUCHE: flecheGaucheEnfoncee = true; break;
					case FLECHE_DROITE: flecheDroiteEnfoncee = true; break;
					case BARRE_ESPACE : barreEspaceEnfoncee  = true;
										debutPartie();
										break;
				}
			}
			
			/* Que faire quand on relache la touche du clavier ? */
			function onKeyUp(evenement) {
				/*console.log("keyup = " + evenement.keyCode);*/
			/*	if (evenement.keyCode == 39) flecheDroiteEnfoncee = false;
				else if (evenement.keyCode == 37) flecheGaucheEnfoncee = false;*/
				switch(evenement.keyCode) {
					case FLECHE_GAUCHE: flecheGaucheEnfoncee = false; break;
					case FLECHE_DROITE: flecheDroiteEnfoncee = false; break;
					case BARRE_ESPACE : barreEspaceEnfoncee  = false; break;
				}
			}

			/* Gestion de la palette en fonction de la position de la souris */
			function onMouseMove(evenement){
				if ((evenement.pageX > minX) && (evenement.pageX > maxX))
					console.log("souris en x="+evenement.pageX);
					x_palette = evenement.pageX - (largeur_palette/2) - minX;
			}
			
			/* CAPTURE DES EVENEMENTS */
			$(document).keydown(onKeyDown);
			$(document).keyup(onKeyUp);
			$(document).mousemove(onMouseMove);
