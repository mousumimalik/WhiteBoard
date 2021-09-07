hello there!!

let canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// to store points define array
let pointsDB = [];
let line = [];
let redoPointsDB = [];

// object desctructuring
let {top : topOffset} = canvas.getBoundingClientRect();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - topOffset;

// write only when isPendown is true
let isPendown = false;

canvas.addEventListener("mousedown", function(event){
    redoPointsDB = [];
    
    line = [];

    isPendown = true;

    let x = event.clientX;
    let y = event.clientY - topOffset;
    ctx.beginPath();
    ctx.moveTo(x, y);

    let point = {
        event : "mousedown",
        x : x,
        y : y,
    };
    line.push(point);
});

canvas.addEventListener("mousemove", function(event){
    if(isPendown) {
        let x = event.clientX;
        let y = event.clientY - topOffset;
        ctx.lineTo(x, y);

        let point = {
            event : "mousemove",
            x : x,
            y : y,
        };
        line.push(point);

        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", function(){
    isPendown = false;

    pointsDB.push(line);
    console.log(pointsDB);
});


