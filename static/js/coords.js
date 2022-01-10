let imgLeft;
let imgRight;

function setup() {
    IMAGE_WIDTH = 1080
    IMAGE_HEIGHT = 1920

    createCanvas(2 * IMAGE_WIDTH, IMAGE_HEIGHT);
    imgLeft = loadImage(`/static/assets/x-y/opencv_frame_${number}.png`);
    imgRight = loadImage(`/static/assets/z-y/opencv_frame_${number}.png`);
}

function draw() {
    image(imgLeft, 0, 0, imgLeft.width, imgLeft.height);
    image(imgRight, IMAGE_WIDTH, 0, imgRight.width, imgRight.height);

    stroke(153);

    line(mouseX, 0, mouseX, IMAGE_HEIGHT);
    line(0, mouseY, 2 * IMAGE_WIDTH, mouseY);
}

function mouseClicked() {
    if (mouseY > 0 && mouseX < (IMAGE_WIDTH * 2)) {
        if (mouseX < IMAGE_WIDTH) {
            coords = { x: mouseX - IMAGE_WIDTH / 2, y: (IMAGE_HEIGHT - mouseY) - IMAGE_HEIGHT / 2 }
            document.getElementById('x-cam-1').value = coords.x;
            document.getElementById('y-cam-1').value = coords.y;
        } else {
            coords = { z: mouseX - (IMAGE_WIDTH / 2) - IMAGE_WIDTH, y: (IMAGE_HEIGHT - mouseY) - IMAGE_HEIGHT / 2 }
            document.getElementById('z-cam-2').value = coords.z;
            document.getElementById('y-cam-2').value = coords.y;
        }
        console.log(JSON.stringify(coords));
    }
}