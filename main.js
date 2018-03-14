const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const buttonLine = document.getElementById('butLine');
const buttonRectangle = document.getElementById('butRect');
const spinnerWidth = document.getElementById('spinnerWidth');
const color = document.getElementById('color');
canvas.width=800;
canvas.height=600;
const drawing = new Drawing();
new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

