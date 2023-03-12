let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let restart = document.getElementById("btn-restart");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();




// function inRad(num) {
//     //  принимает угол в радианах
//     return num * Math.PI / 180;
// }

// bird.rotate(inRad(45));

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Звуковые файлы
let fly = new Audio();
let score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 25;
    bird.style.transform = "rotate(" + 15 + "deg)";
}

// Создание блоков
let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

let score = 0;
// Позиция птички
let xPos = 10;
let yPos = 200;
let grav = 1.5;

// bird.setAttribut("transform", "rotate(5,5,5)");
moveUp();


function restart_btn() {
    location.reload();
}

function draw() {

    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < pipe.length; i++) {

        pipe[i].x--;

        //созданиние новых труб рандомно
        if (pipe[i].x == 80) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }


        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);


        // Отслеживание прикосновений
        if (xPos + bird.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y + pipeUp.height ||
                yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height - 10) {
            restart.style.display = "block";

            ctx.drawImage(fg, 0, cvs.height - fg.height);
            ctx.drawImage(bird, xPos, yPos);
            ctx.stop();

            // location.reload(); // Перезагрузка страницы
        }

        if (pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
        if (pipe.length > 2) {
            pipe.shift()
        }
    }


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";

    ctx.fillText("Счет: " + score, 10, cvs.height - 20);

    if (pipe.length > 2) {
        pipe.shift()
    }

    requestAnimationFrame(draw);
}






pipeBottom.onload = draw;