const grid = document.querySelector(".grid")
const boardWidth = 1000
const boardHeight = 550
let xDirection = 4
let yDirection = 0
let rectangleWidth=60
let rectangleHeight=60
const nearBorder=10
let centerYleft = (boardHeight-rectangleHeight)/2
let centerXLeft=(boardWidth-rectangleHeight)/2

let centerYBottom= boardHeight-rectangleHeight-nearBorder
let centerXBottom=(boardWidth-rectangleHeight)/2

const rectangleStart=[nearBorder,-centerYleft]
let rectangleCurrentPosition=rectangleStart

let timerId=""
let speed= 12

let btnHorizontal =document.querySelector("#btn-horizontal-mode")
let btnVertical= document.querySelector("#btn-vertical-mode")



let exerciseVertical= false
let exerciseHorizontal =true
let elementisPause=true

let isMenuExerciseHidden=true;

//start app

window.onload =playButton()
btnHorizontal.style.border="solid 3px #541A60"
console.log(centerYleft)
console.log(centerXLeft)
console.log(centerXBottom)
console.log(centerYBottom)
grid.style.width=boardWidth +'px'
grid.style.height= boardHeight+'px'



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

//move rectangle horizontal
function moveRectangleHorizontal() {
    rectangleCurrentPosition[0] += xDirection
    rectangleCurrentPosition[1] += yDirection
    drawRectangle()
    checkForhit()
   
}

function moveRectangleVertical() {
    rectangleCurrentPosition[0] += xDirection
    rectangleCurrentPosition[1] += yDirection
    drawRectangle()
    checkForhitVertical()
   
}

//check for wall hit horizontal

function checkForhit (){
    if(xDirection===4 && rectangleCurrentPosition[0]>boardWidth-nearBorder-rectangleWidth){
        xDirection=-4
    }else if(xDirection===-4 && rectangleCurrentPosition[0]<nearBorder){
        xDirection=4
    }
}

//check for wall hit vertical

function checkForhitVertical (){
    if(yDirection===4 && rectangleCurrentPosition[1]>-nearBorder){
        yDirection=-4
    }else if(yDirection===-4 && rectangleCurrentPosition[1]<-(boardHeight-nearBorder-rectangleHeight)){
        yDirection=4
    }
}

//stopButton
function stopButton(){
    clearInterval(timerId)
    elementisPause=true 
   if(exerciseHorizontal){
        rectangle.style.left =nearBorder + 'px'
        rectangle.style.bottom = -centerYleft + 'px'  
    }
    if(exerciseVertical){
        rectangle.style.left =centerXBottom + 'px'
        rectangle.style.bottom = -centerYBottom + 'px' 

    } 
    
}

//playButton
function playButton(){
    if (elementisPause){
        clearInterval(timerId) 
        if(exerciseHorizontal){
            rectangleCurrentPosition[0]= nearBorder
            rectangleCurrentPosition[1] =-centerYleft
            timerId= setInterval(moveRectangleHorizontal,speed)
        }
        if(exerciseVertical){
            rectangleCurrentPosition[0]= centerXBottom
            rectangleCurrentPosition[1] =-centerYBottom
            timerId= setInterval(moveRectangleVertical,speed)
        }
    }
    elementisPause=false
    
}

// Change Speed
//Not like how i solved using changing intervals

function speedUp(){
    if (!elementisPause){
        if(speed>0){
            clearInterval(timerId) 
            speed-=3
            if(exerciseHorizontal){
                timerId= setInterval(moveRectangleHorizontal,speed)
            }
            if(exerciseVertical){
                timerId= setInterval(moveRectangleVertical,speed)
            }
        }
    }
            
}

function speedDown(){
    if (!elementisPause){
        if(speed<100){
            clearInterval(timerId) 
            speed+=3
            if(exerciseHorizontal){
                timerId= setInterval(moveRectangleHorizontal,speed)
            }
            if(exerciseVertical){
                timerId= setInterval(moveRectangleVertical,speed)
            }
        }
    }
}

/// CHANGE EXERCISE

//Change Mode  horizontal

function modeHorizontal(){
    clearInterval(timerId) 
    rectangleCurrentPosition[0]= nearBorder
    rectangleCurrentPosition[1] =-centerYleft
    xDirection=4
    yDirection=0
    timerId= setInterval(moveRectangleHorizontal,speed)
    exerciseHorizontal =true
    exerciseVertical=false
    btnHorizontal.style.border="solid 3px #541A60"
    btnVertical.style.border="solid 1px black"

}

//Change Mode horizontal

function modeVertical(){
    clearInterval(timerId) 
    rectangleCurrentPosition[0]=centerXBottom
    rectangleCurrentPosition[1] =-centerYBottom
    xDirection=0
    yDirection=4
    timerId= setInterval(moveRectangleVertical,speed)
    exerciseHorizontal =false
    exerciseVertical=true
    btnHorizontal.style.border="solid 1px black"
    btnVertical.style.border="solid 3px #541A60"

}


//btnchange background color

function changeBackgroudColor1(){
    grid.style.backgroundColor="#141414"
    rectangle.style.border="solid 1px white"
}
function changeBackgroudColor2(){
    grid.style.backgroundColor="white"
}
function changeBackgroudColor3(){
    grid.style.backgroundColor="#FFFC5C"
    rectangle.style.border="solid 1px #141414"
}
function changeBackgroudColor4(){
    grid.style.backgroundColor="#DF0105"
}
function changeBackgroudColor5(){
    grid.style.backgroundColor="#178EDE"
}

//btn change element color

function changeElementColor1(){
    rectangle.style.backgroundColor="#141414"
    rectangle.style.border="solid 1px white"
}
function changeElementColor2(){
    rectangle.style.backgroundColor="white"
    rectangle.style.border="solid 1px #141414"
}
function changeElementColor3(){
    rectangle.style.backgroundColor="#FFFC5C"
}
function changeElementColor4(){
    rectangle.style.backgroundColor="#DF0105"
}
function changeElementColor5(){
    rectangle.style.backgroundColor="#178EDE"
}


//Open Menu

const selectExerciseMenu =document.getElementById("btn-toggle-exercise")
const exerciseMenu=document.getElementById("button-menu-top")

function openMenuExercise(){
    if(isMenuExerciseHidden){
        exerciseMenu.style.display="block"
        isMenuExerciseHidden=false
    }else{
        exerciseMenu.style.display="none"
        isMenuExerciseHidden=true

    }
    
    

}