function Drawing() {
    this.formes = [];
    this.addForme = function(forme) {
        this.formes.push(forme);
    }.bind(this);

    this.getFormes = function() {
        return this.formes;
    }.bind(this);

    this.deleteForm = function(index) {
        console.log("iciiiiiiiiiiiiiiiiiiiii")
        console.log(index)
        if(index > -1) {
            this.formes.splice(index, 1);
        }
        console.log(this.formes)
    }.bind(this);

    this.clearForms = function() {
        this.formes.length = 0;
    }.bind(this);
};

function Forme(xDeb, yDeb, xFin, yFin, thickness, color) {
    this.xDeb = xDeb;
    this.yDeb = yDeb;
    this.xFin = xFin;
    this.yFin = yFin;
    this.thickness = thickness;
    this.color = color;

    this.getInitX = function () {
        return this.xDeb;
    }

    this.getInitY = function () {
        return this.yDeb;
    }

    this.getFinalX = function () {
        return this.xFin;
    }

    this.setFinalX  = function (x) {
        this.xFin = x;
    }

    this.setFinalY  = function (y) {
        this.yFin = y;
    }

    this.getFinalY = function () {
        return this.yFin;
    }

    this.getColor = function() {
        return this.color;
    }.bind(this);

    this.getThickness = function() {
        return this.thickness;
    }.bind(this);
}

function Rectangle(xDeb, yDeb, xFin, yFin, thickness, color) {
    Forme.call(this, xDeb, yDeb, xFin, yFin, thickness, color);
}

function Line(xDeb, yDeb, xFin, yFin, thickness, color) {
    Forme.call(this, xDeb, yDeb, xFin, yFin, thickness, color);
}

Rectangle.prototype = new Forme();
Line.prototype = new Forme();