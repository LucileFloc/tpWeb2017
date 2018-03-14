Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY())
    ctx.lineTo(this.getInitX(), this.getFinalY())
    ctx.lineTo(this.getInitX(), this.getInitY())
    ctx.stroke();

};

Forme.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getThickness();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getFormes().forEach(function (res) {
        res.paint(ctx);
    });
};