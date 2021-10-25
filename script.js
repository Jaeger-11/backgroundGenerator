var rgbValue = document.getElementById("rgbValue");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var button = document.querySelector("button");

body.style.background = "linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ " )" ;

rgbValue.textContent = body.style.background + ";";

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + " )" ;
 
    rgbValue.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// CREATING A RANDOM BACKGROUND COLOR BUTTON
// Using the HSL() color values and the Math library

// maximum value of r = 255
// maximum value of g = 255
// maximum value of b = 255

function getRandomNumber(maxNum){
    return Math.floor(Math.random() * maxNum);
}

function getRandomColor(){
    var h = getRandomNumber(255);
    var s = getRandomNumber(255);
    var l = getRandomNumber(255);
    // console.log(`hsl(${h}deg, ${s}%, ${l}%);`);
    return `rgb(${h}, ${s}, ${l})`;  
}

function setBackgroundColor(){
    c1 = getRandomColor();
    c2 = getRandomColor();
    body.style.background = 
    "linear-gradient(to right, " 
    +  c1
    + ", " 
    + c2
    + " )" ;
    rgbValue.textContent = body.style.background + ";";
}

button.addEventListener("click", setBackgroundColor);


//  NOT DONE WITH THE BUTTON RANDOM.