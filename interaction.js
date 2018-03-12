
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	//Définir ici les attributs de la 'classe'

    this.posInitX = 0;
    this.posInitY = 0;
    this.posFinalX = 0;
    this.posFinalY = 0;
    this.estPresse = false;

	//Developper les 3 fonctions gérant les événements
    //Implémentation

    //Pression de la souris
    this.pression = function(evt){
        this.posInitX = getMousePosition(canvas, evt).x;
        this.posInitY = getMousePosition(canvas, evt).y;
        this.estPresse = true;
    }.bind(this);

    // Mouvement de la souris
    this.deplacement = function(evt){
        if (this.estPresse){
            this.posFinalX = getMousePosition(canvas, evt).x;
            this.posFinalY = getMousePosition(canvas, evt).y;
        }
    }.bind(this);

    // Relâchement de la souris
    this.relachement = function(evt){
        if (this.estPresse){
            this.posFinalX = getMousePosition(canvas, evt).x;
            this.posFinalY = getMousePosition(canvas, evt).y;
            this.estPresse = false;
        }
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



