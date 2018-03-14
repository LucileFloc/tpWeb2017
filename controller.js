editingMode = true;

function Pencil(ctx, drawing, canvas) {
    this.currLineWidth = 5;
    this.currColor = '#000000';
    this.currentShape = 0;

    this.changeEditingMode = function() {
        this.editingMode = !this.editingMode;
    }.bind(this);

    // modifier épaisseur du trait
    this.changeLineWidth = function(elt) {
        this.currLineWidth = elt.target.value;
    }.bind(this);

    // modifier couleur du trait
    this.changeColor = function(elt) {
        this.currColor = elt.target.value;
    }.bind(this);

    new DnD(canvas, this);

    this.onInteractionStart = function(DnD) {
        if(this.editingMode) {
            this.currentShape = new Rectangle(DnD.posInitX, DnD.posInitX, DnD.xInit, 0, this.currLineWidth, this.currColor);
        } else {
            this.currentShape = new Line(DnD.posInitX, DnD.posInitY, DnD.posInitX, DnD.posInitY, this.currLineWidth, this.currColor);
        }
    }.bind(this);

    this.onInteractionUpdate = function(DnD) {
        this.currentShape.setFinalX(DnD.posFinalX);
        this.currentShape.setFinalY(DnD.posFinalY);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

    }.bind(this);

    // création de la forme dans le canvas
    this.onInteractionEnd = function() {
        drawing.addForme(this.currentShape);
        drawing.paint(ctx, canvas);
    }.bind(this);

    // EventListeners
    buttonLine.addEventListener('click', this.changeEditingMode.bind(this));
    buttonRectangle.addEventListener('click', this.changeEditingMode.bind(this));
    spinnerWidth.addEventListener('change', this.changeLineWidth.bind(this));
    color.addEventListener('change', this.changeColor.bind(this));
};
