			function init_Briques() {
				nombreLignes = 1;
				nombreColonnes = 10;
				espacementBrique = 1;
				hauteurBrique = 10;
				largeurBrique = (largeur_canvas/nombreColonnes) - espacementBrique;
				briques_restantes = nombreColonnes*nombreLignes;
				
				/* Mémorisation des briques cassées ou non */
				briques = new Array(nombreLignes);
				for (i=0;i<nombreLignes;i++) {
					briques[i] = new Array(nombreColonnes);
					for (j=0;j<nombreColonnes;j++) {
						briques[i][j] = 1;
					}
				}
			}
			
			function initMouse() {
				minX = $("#mon_canvas").offset().left;	/* décalage entre le coté gauche de l'écran et le coin gauche de mon canvas */
				minY = $("#mon_canvas").offset().top;	/* décalage entre le haut de l'écran et le coin gauche de mon canvas */
				maxX = minX + $("#mon_canvas").width(); /* décalage entre le coté gauche de l'écran et le coin droit de mon canvas (largeur du canvas) */
				maxY = minY + $("#mon_canvas").height();/* décalage entre le haut de l'écran et le coin droit de mon canvas */
			}
			
