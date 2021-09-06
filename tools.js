const undo = document.querySelector("#undo");
const redo = document.querySelector("#redo");

undo.addEventListener("click", function(){
    if(pointsDB.length != 0){
        let line = pointsDB.pop();
        redoPointsDB.push(line);
        drawPoints();
    }
})

redo.addEventListener("click", function(){
    if(redoPointsDB.length > 0){
        let line = redoPointsDB.pop();
        pointsDB.push(line);
        for(let i = 0; i < line.length; i++) {
                if(line[i].event == "mousedown"){
                    ctx.beginPath();
                    ctx.moveTo(line[i].x, line[i].y);
                }else{
                    ctx.lineTo(line[i].x, line[i].y);
                    ctx.stroke();
                }
        }   
    }
})

// re-draw the lines present in pointsDB
function drawPoints() {
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < pointsDB.length; i++) {
        let line = pointsDB[i];
        for(let j = 0; j <line.length; j++) {
            if(line[j].event == "mousedown"){
                ctx.beginPath();
                ctx.moveTo(line[j].x, line[j].y);
            }else{
                ctx.lineTo(line[j].x, line[j].y);
                ctx.stroke();
            }
        } 
    }   
}
