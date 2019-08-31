var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("displayMessage");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    // displayMessage.textContent=pickedColor;
    colorDisplay.textContent = pickedColor;
    for (var i=0;i<squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

var resetButton = document.querySelector("button");
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "#steelblue";
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    displayMessage.textContent="";
    resetButton.textContent = "New Game!"
    h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;
for(var i=0;i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        displayMessage.textContent = clickedColor;
        if (clickedColor == pickedColor){
            // alert("Correct!");
            resetButton.textContent = "Try Again!"
            displayMessage.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            displayMessage.textContent = "Wrong! ";
            this.style.backgroundColor = "#232323";
            // alert("Wrong!");
        }
    });
}
function changeColors(color){
    for( var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var r = Math.floor(Math.random() * colors.length);
    return colors[r];
}

function generateRandomColors(n){
    var arr = [];
    for (var i = 0; i < n; i++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = "rgb("+r+", "+g+", "+b+  ")"
        arr.push(color);
    }
    return arr;
}