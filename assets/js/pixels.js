var mainCanvas = document.querySelector("#PixelsCanvas");
var mainContext = mainCanvas.getContext("2d");
mainCanvas.width = 0.5 * window.innerWidth;
mainCanvas.height = window.innerHeight;
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
const pixelSize = 10;
var canvasWidthPixels = Math.floor(canvasWidth/pixelSize);
var canvasHeightPixels = Math.floor(canvasHeight/pixelSize);

var framestoskip = 10, counter = 0, currCount = 0;

var initGrid;

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimatioFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

function clearGrid(){
    playing = false;
    mainCanvas.width = 0.5 * window.innerWidth;
    mainCanvas.height = window.innerHeight;
    canvasWidth = mainCanvas.width;
    canvasHeight = mainCanvas.height;
    canvasWidthPixels = Math.floor(canvasWidth/pixelSize);
    canvasHeightPixels = Math.floor(canvasHeight/pixelSize);
    initGrid = new Array (canvasHeightPixels);
    for(var iGy = 0; iGy < canvasHeightPixels; iGy++){
        initGrid[iGy] = new Array(canvasWidthPixels);
    }
    for(var i = 0; i < canvasHeightPixels; i++){
        for(var j = 0; j < canvasWidthPixels; j++){
            initGrid[i][j] = 0.0;
        }
    }
    printCells();
}

function generateGrid(){
    clearGrid();
    for(var i = 0; i < canvasHeightPixels; i++){
        for(var j = 0; j < (canvasWidthPixels); j++){
            initGrid[i][j] = Math.random() * ((canvasWidth - j) / canvasWidth);
        }
    }
    printCells();
}

function incrementGrid(){
    var gridNext = new Array(canvasHeightPixels);
    for(var gNy = 0; gNy < canvasHeightPixels; gNy++){
        gridNext[gNy] = new Array(canvasWidthPixels);
    }
    for(var i = 0; i < canvasHeightPixels; i++){
        for(var j = 0; j < canvasWidthPixels; j++){
            gridNext[i][j] = 0.5 * (Math.sin(currCount + (2 * Math.random() * Math.PI)) + 1);
        }
    }
    initGrid = gridNext.slice();
}

function nextLevel(){
    if(counter < framestoskip){
        currCount++;
        counter++;
        requestAnimationFrame(nextLevel);
        return;
    }
    //incrementGrid();
    printCells();
    counter = 0;
    requestAnimationFrame(nextLevel);
}

function printCells(){
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
    mainContext.fillStyle="rgba(0, 0, 0, 0.0)";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
    for(var i = 0; i < canvasHeightPixels; i++){
        for(var j = 0; j < canvasWidthPixels; j++){
            mainContext.fillStyle="rgba(0, 0, 0, " + initGrid[i][j] + ")";
            mainContext.fillRect(pixelSize*j, pixelSize*i, pixelSize, pixelSize);
        }
    }
}

generateGrid();
nextLevel();

$(window).resize(function(){
    generateGrid();
});