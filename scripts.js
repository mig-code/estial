const grid = document.querySelector(".grid")
const ballDiameter = 20
const boardWidth = 600
const boardHeight = 400
let xDirection = 4
let yDirection = 0
const ballStart = [270, -140]
let ballCurrentPosition = ballStart
const rectangleStart=[10,-170]
let rectangleCurrentPosition=rectangleStart
let timerId=""
let speed= 12


//add rectangle

const rectangle =document.createElement("div")
rectangle.classList.add("rectangle")
grid.appendChild(rectangle)
drawRectangle()

//draw rectangle
function drawRectangle() {
    rectangle.style.left = rectangleCurrentPosition[0] + 'px'
    rectangle.style.bottom =rectangleCurrentPosition[1] + 'px'   
   
  }

//move rectangle
function moveRectangle() {
    rectangleCurrentPosition[0] += xDirection
    rectangleCurrentPosition[1] += yDirection
    drawRectangle()
    checkForhit()
   
}

//check for wall hit

function checkForhit (){
    if(xDirection===4 && rectangleCurrentPosition[0]>530){
        xDirection=-4
    }else if(xDirection===-4 && rectangleCurrentPosition[0]<10){
        xDirection=4
    }
}

//stopButton
function stopButton(){
    clearInterval(timerId) 
    
    rectangle.style.left =10 + 'px'
    rectangle.style.bottom = -170 + 'px'  
    
}

//playButton
function playButton(){
    clearInterval(timerId) 
    rectangleCurrentPosition[0]= 10 
    rectangleCurrentPosition[1] =-170
    timerId= setInterval(moveRectangle,speed)
}

// Change Speed
//Not like how i solved using changing intervals

function speedUp(){
    if(speed>0){
        clearInterval(timerId) 
        speed-=3
        timerId= setInterval(moveRectangle,speed)
    }
}
function speedDown(){
    if(speed<100){
        clearInterval(timerId) 
        speed+=3
        timerId= setInterval(moveRectangle,speed)
    }
}


//btnchange background color

function changeBackgroudColor1(){
    grid.style.backgroundColor="black"
}
function changeBackgroudColor2(){
    grid.style.backgroundColor="white"
}
function changeBackgroudColor3(){
    grid.style.backgroundColor="yellow"
    rectangle.style.border="solid 1px black"
}
function changeBackgroudColor4(){
    grid.style.backgroundColor="red"
}

//btn change element color

function changeElementColor1(){
    rectangle.style.backgroundColor="black"
    rectangle.style.border="solid 1px white"
}
function changeElementColor2(){
    rectangle.style.backgroundColor="white"
    rectangle.style.border="solid 1px black"
}
function changeElementColor3(){
    rectangle.style.backgroundColor="yellow"
}
function changeElementColor4(){
    rectangle.style.backgroundColor="red"
}
