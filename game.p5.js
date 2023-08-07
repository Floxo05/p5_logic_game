let circles = [
    'green',
    'green',
    'green',
    'white',
    'red',
    'red',
    'red',
]

function setup() {
    createCanvas(600, 400);
}

function draw() {
    let y = height / 2;

    background(220);


    for (let i = 0; i < 7; i++) {
        let x = width / 7;
        let px = x * i + 40;

        drawCircle(px, y, circles[i]);
    }
}


function drawCircle(x, y, clr) {
    fill(color(clr));

    circle(x, y, 50)
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        console.log('left');
        move('left');
    } else if (keyCode === RIGHT_ARROW) {
        console.log('right');
        move('right');
    }
}

function move(drt) {
    let iWhite = searchWhite();


    if (drt === 'right') {
        if (iWhite === 0) {
            throw new Error('Zug nicht möglich');
        }

        if (circles[iWhite - 1] === 'green') {
            sw(iWhite, iWhite - 1);
            return;
        }

        if (circles[iWhite -1] === 'red' && circles[iWhite - 2] === 'green'){
            sw(iWhite, iWhite - 2);
            return;
        }
    }
    if (drt === 'left') {
        if (iWhite === circles.length - 1) {
            throw new Error('Zug nicht möglich');
        }

        if (circles[iWhite + 1] === 'red') {
            sw(iWhite, iWhite + 1);
            return;
        }

        if (circles[iWhite + 1] === 'green' && circles[iWhite + 2] === 'red'){
            sw(iWhite, iWhite + 2);
            return;
        }
    }

    throw new Error('keine Züge mehr möglich');

}

function searchWhite() {
    for (let i = 0; i < circles.length; i++) {
        if (circles[i] === 'white') {
            return i;
        }
    }
}

function sw(a, b) {
    let v = circles[b];
    circles[b] = circles[a];
    circles[a] = v;
}
