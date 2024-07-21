// Get the canvas element and its 2d context
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

// Define image paths and dimensions
var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";
var greencar_width = 75;
var greencar_height = 100;

// Initial position of the green car
var greencar_x = 5;
var greencar_y = 225;

// Function to load background and green car images
function add() {
    // Load and display the background image
    var background_imgTag = new Image();
    background_imgTag.onload = function() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    };
    background_imgTag.src = background_image;

    // Load and display the green car image
    var greencar_imgTag = new Image();
    greencar_imgTag.onload = function() {
        ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
    };
    greencar_imgTag.src = greencar_image;

    // Event listener for keydown events to control the green car
    window.addEventListener("keydown", function(e) {
        var keyPressed = e.keyCode;
        moveCar(keyPressed);
    });
}

// Function to move the green car based on arrow key presses
function moveCar(keyPressed) {
    switch (keyPressed) {
        case 37: // Left arrow
            if (greencar_x > 0) {
                greencar_x -= 10;
                draw();
            }
            break;
        case 39: // Right arrow
            if (greencar_x < canvas.width - greencar_width) {
                greencar_x += 10;
                draw();
            }
            break;
        case 38: // Up arrow
            if (greencar_y > 0) {
                greencar_y -= 10;
                draw();
            }
            break;
        case 40: // Down arrow
            if (greencar_y < canvas.height - greencar_height) {
                greencar_y += 10;
                draw();
            }
            break;
    }
}

// Function to redraw the canvas with updated positions
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}
