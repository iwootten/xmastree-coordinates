let table;

function preload() {
    table = loadTable('static/assets/coords.csv', 'csv');
}

function setup() {
    IMAGE_WIDTH = 1920
    IMAGE_HEIGHT = 1920
    SCALE = 2
    COLOURS = ['red', 'blue', 'yellow']
    createCanvas(IMAGE_WIDTH / SCALE, IMAGE_HEIGHT / SCALE, WEBGL);

}
function draw() {
    let colour = 'yellow';

    strokeWeight(10);
    background(51);
    rotateY(frameCount * 0.01);

    if (mouseIsPressed) {
        if (colour === 'yellow') {
            if (mouseButton === LEFT) {
                colour = 'red';
            } else {
                colour = 'blue';
            }
        } else {
            colour = 'yellow';
        }
    }

    for (let i = 0; i < table.getRowCount(); i++) {
        stroke(color(colour));
        point(table.getNum(i, 0) / SCALE, (150 - table.getNum(i, 1)) / SCALE, table.getNum(i, 2) / SCALE);
    }
}