			function dessiner() {
				effacer_ecran();

				dessiner_balle();

				/* si la fleche droite est enfoncée, on dessine la palette 5 pixels plus à droite */
				if (flecheDroiteEnfoncee) x_palette += 5;
				/* si la fleche gauche est enfoncée, on dessine la palette 5 pixels plus à gauche */
				else if (flecheGaucheEnfoncee) x_palette -= 5;

				dessiner_palette(x_palette, hauteur_canvas-hauteur_palette, largeur_palette,hauteur_palette);

				/* dessiner les briques restantes */
				for (i=0;i<nombreLignes;i++) {
					for (j=0;j<nombreColonnes;j++){
						if (briques[i][j] == 1) {
							xBrique = j*(largeurBrique+espacementBrique);
							yBrique = i*(hauteurBrique+espacementBrique);
				/*console.log("Brique "+i+","+j+" x="+xBrique+" y="+yBrique);*/
							dessiner_brique(xBrique,yBrique,largeurBrique,hauteurBrique);
						}
					}
				}

				yLigne = hauteurBrique + espacementBrique;		/* 10+1 = 11 */
				xColonne = largeurBrique + espacementBrique;	/* 40+1 = 41 */

				/* Pour une certaine valeur de (x,y) de la balle, on calcule dans quelle ligne et colonne des briques on se situe */
				ligne = Math.floor(y/yLigne);
				/* par exemple,
				si y=35, 35/11=3.1818... => j=3
				si y=24, 24/11=2.1818... => j=2
				si y=17, 17/11=1.545454  => j=1
				si y=6, 6/11=0.545454    => j=0	*/
				colonne = Math.floor(x/xColonne);
				/* par exemple,
				si x=35, 35/41=0.8536 => i=0
				si x=68, 68/41=1.6585 => i=1 */

				/* A-t-on touché une brique ? */
				if ((y<nombreLignes*yLigne) && (ligne>=0) && (colonne>=0) && (briques[ligne][colonne]==1)) {
					dy = -dy;
					dx = dx;
					briques[ligne][colonne] = 0;
					briques_restantes--;
					sonBrique.play();
				}

				if (briques_restantes==0) {
					/* on a gagné */
					clearInterval(intervalID);
					gagne();
				}

				/* Tester si on touche la palette ou les limites du jeu */
				/* tester le depassement à gauche ou à droite */
				if ((x+dx > largeur_canvas) || (x+dx<0)) {
					dx = -dx;
					sonMur.play();		/* on touche les murs à gauche ou à droite */
				}
				/* tester le dépassement en haut ou en bas */
				if (y+dy<0){
					dy = -dy;
					sonMur.play();		/* on touche le plafond */
					} else if (y+dy > hauteur_canvas-hauteur_palette) {
						if ((x > x_palette) && (x < x_palette+largeur_palette)) {
							/* on rebondit différemment selon la position sur la palette */
							switch(positionPalette(x,x_palette)) {
								case "GAUCHE2" : dy = -dy; dx = -2; break;
								case "GAUCHE1" : dy = -dy; dx = -1; break;
								case "CENTRE"  : dy = -dy; dx =  0; break;
								case "DROITE1" : dy = -dy; dx =  1; break;
								case "DROITE2" : dy = -dy; dx =  2; break;
							}
						sonPalette.play();		/* touche la palette */

						} else if (y+dy > hauteur_canvas) {
							/* partie perdue */
							clearInterval(intervalID);
							perdu();
						}
					}

				/*console.log(x + " " + y + " " + dx + " " + dy);*/

				/* Calculer la position suivante pour la balle */
				x = x + dx;
				y = y + dy;

			}

			function dessiner_balle() {
				/* Dessiner la balle */
				ctx.beginPath();
				ctx.fillStyle = "#FFBD34";
				ctx.arc(x,y,10,0,2*Math.PI,true);
				ctx.closePath();
				ctx.fill();
			}

			function dessiner_palette(x,y,l,h) {
				ctx.beginPath();
				ctx.fillStyle = "#FF5C58";
				ctx.fillRect(x,y,l,h);
				ctx.closePath();
			}

			function dessiner_brique(x,y,l,h) {
				ctx.beginPath();
				ctx.fillStyle = "#49CBD1";
				ctx.fillRect(x,y,l,h);
				ctx.closePath();
			}
