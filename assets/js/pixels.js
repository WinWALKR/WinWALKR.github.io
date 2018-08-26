const pixelSize = 80;

function setCanvasSize(canvas) {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = window.innerHeight;
    return;
}

function canvasWidthPixels(canvas) {
    return Math.ceil(canvas.width/pixelSize);
}

function canvasHeightPixels(canvas) {
    return Math.ceil(canvas.height/pixelSize);
}

function printCells(canvas, grid, context){
    var canvasWidth = canvasWidthPixels(canvas);
    var canvasHeight = canvasHeightPixels(canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < canvasHeight; i++){
        for(var j = 0; j < canvasWidth; j++){
            context.fillStyle="rgba(10, 10, 10, " + 0.5 * (Math.sin(grid[i][j]) + 1) + ")";
            context.fillRect(pixelSize*j, pixelSize*i, pixelSize, pixelSize);
        }
    }
    return;
}

function clearGrid(canvas){
    setCanvasSize(canvas);
    var canvasWidth = canvasWidthPixels(canvas);
    var canvasHeight = canvasHeightPixels(canvas);
    grid = new Array (canvasHeight);
    for(var iGy = 0; iGy < canvasHeight; iGy++){
        grid[iGy] = new Array(canvasWidth);
    }
    for(var i = 0; i < canvasHeight; i++){
        for(var j = 0; j < canvasWidth; j++){
            grid[i][j] = 0.0;
        }
    }
    return grid;
}

function generateGrid(canvas){
    grid = clearGrid(canvas);
    var canvasWidth = canvasWidthPixels(canvas);
    var canvasHeight = canvasHeightPixels(canvas);
    for(var i = 0; i < canvasHeight; i++){
        for(var j = 0; j < canvasWidth; j++){
            grid[i][j] = Math.random() * 2 * Math.PI;
        }
    }
    return grid;
}

var mainCanvas = document.querySelector("#PixelsCanvas1");
var mainContext = mainCanvas.getContext("2d");
setCanvasSize(mainCanvas);
var initGrid1 = generateGrid(mainCanvas, mainContext);
printCells(mainCanvas, initGrid1, mainContext);
var mainCanvasWidth = canvasWidthPixels(mainCanvas);
var mainCanvasHeight = canvasHeightPixels(mainCanvas);

var secondCanvas = document.querySelector("#PixelsCanvas2");
var secondContext = secondCanvas.getContext("2d");
setCanvasSize(secondCanvas);
var initGrid2 = generateGrid(secondCanvas, secondContext);
printCells(secondCanvas, initGrid2, secondContext);
var secondCanvasWidth = canvasWidthPixels(secondCanvas);
var secondCanvasHeight = canvasHeightPixels(secondCanvas);

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimatioFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

$(window).resize(function(){
    initGrid1 = generateGrid(mainCanvas, mainContext);
    mainCanvasWidth = canvasWidthPixels(mainCanvas);
    mainCanvasHeight = canvasHeightPixels(mainCanvas);
    initGrid2 = generateGrid(secondCanvas, secondContext);
    secondCanvasWidth = canvasWidthPixels(secondCanvas);
    secondCanvasHeight = canvasHeightPixels(secondCanvas);
});

function pixels(){
    for(var i = 0; i < mainCanvasHeight; i++){
        for(var j = 0; j < mainCanvasWidth; j++){
            if (initGrid1[i][j] >= (2 * Math.PI)){
                initGrid1[i][j] = 0.0;
            }
            else {
                initGrid1[i][j] += 0.02;
            }
        }
    }
    for(var i = 0; i < secondCanvasHeight; i++){
        for(var j = 0; j < secondCanvasWidth; j++){
            if (initGrid2[i][j] >= (2 * Math.PI)){
                initGrid2[i][j] = 0.0;
            }
            else {
                initGrid2[i][j] += 0.02;
            }
        }
    }
    printCells(mainCanvas, initGrid1, mainContext);
    printCells(secondCanvas, initGrid2, secondContext);
    requestAnimationFrame(pixels);
    return;
}

pixels();