// Максимальное количество  на экране
let starmax = 65;
// Массив цветов 
let starcolor = new Array("#AAAACC", "#DDDDFF", "#CCCCDD", "#F3F3F3", "#F0FFFF", "#FFFFFF", "#EFF5FF");
// Массив шрифты для 
let startype = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS");
// Знак для 
let starletter = "✦";
// Скорость падение
let sinkspeed = 0.2;
// Максимальный размер  
let starmaxsize = 10;
// Минимальный размер 
let starminsize = 8;
let staringzone = 1;

// Массив 
let star = new Array();
// Отступы с низу
let marginbottom;
// Отступы с право
let marginright;

// Таймер
let timer;
let i_star = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
// Данные о браузере
let browserinfos = navigator.userAgent;
let ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
let ns6 = document.getElementById && !document.all;
let opera = browserinfos.match(/Opera/);
// Браузер
let browserok = ie5 || ns6 || googlehrom;


function randommaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}


function initstar() {
    if (ie5 || opera) {

        marginbottom = document.body.clientHeight;
        marginright = document.body.clientWidth;
    } else if (ns6) {

        marginbottom = window.innerHeight;
        marginright = window.innerWidth - 30;
    }
    var starsizerange = starmaxsize - starminsize;
    for (i = 0; i <= starmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random();
        x_mv[i] = 0.03 + Math.random() / 50;
        star[i] = document.getElementById("s" + i);
        star[i].style.fontFamily = startype[randommaker(startype / length)];
        star[i].size = randommaker(starsizerange) + starminsize;
        star[i].style.fontSize = star[i].size + "px";
        star[i].style.color = starcolor[randommaker(starcolor.length)];
        star[i].sink = sinkspeed * star[i].size / 5;
        if (staringzone == 1) { star[i].posx = randommaker(marginright - star[i].size) }
        if (staringzone == 2) { star[i].posx = randommaker(marginright / 2 - star[i].size) }
        if (staringzone == 3) { star[i].posx = randommaker(marginright / 2 - star[i].size) + marginright / 4 }
        if (staringzone == 4) { star[i].posx = randommaker(marginright / 2 - star[i].size) + marginright / 2 }
        star[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * star[i].size);
        star[i].style.left = star[i].posx + "px";
        star[i].style.top = star[i].posy + "px";
    }
    movestar();
}



function movestar() {
    for (i = 0; i <= starmax; i++) {
        crds[i] += x_mv[i];
        star[i].posy += star[i].sink;
        star[i].style.left = star[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
        star[i].style.top = star[i].posy + "px";
        if (star[i].posy >= marginbottom - 2 * star[i].size || parseInt(star[i].style.left) > (marginright - 3 * lftrght[i])) {
            if (staringzone == 1) { star[i].posx = randommaker(marginright - star[i].size) }
            if (staringzone == 2) { star[i].posx = randommaker(marginright / 2 - star[i].size) }
            if (staringzone == 3) { star[i].posx = randommaker(marginright / 2 - star[i].size) + marginright / 4 }
            if (staringzone == 4) { star[i].posx = randommaker(marginright / 2 - star[i].size) + marginright / 2 }
            star[i].posy = 0;
        }
    }
    var timer = setTimeout("movestar()", 50);
}

for (i = 0; i <= starmax; i++) {
    document.write("<span id='s" + i + "' style='position:absolute;top:-" + starmaxsize + "px; margin-top:10vh;'>" + starletter + "</span>");
}

if (browserok) {
    window.onload = initstar;
}