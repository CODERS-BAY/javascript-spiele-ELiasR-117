
/*---------- HANDYWEITWURF --------------*/


let speed = 0;
let angle = 0;
let fallingSpeed = 0;
let distanceToMonster =  Math.random() * 90 + 10;
distanceToMonster = Math.round(distanceToMonster);
let Tries = 3;

    function throwHandy() {

    angle = document.getElementById('angle').value;
    angle = angle * (Math.PI/180);
    speed = document.getElementById('throwingPower').value; 
    let select = document.getElementById('Gravity');
    fallingSpeed = select.options[select.selectedIndex].text;

    if(fallingSpeed == "Erde 9.81 m/s²"){
        fallingSpeed = 9.81;
    } else if(fallingSpeed == "Mars 3.69 m/s²"){
        fallingSpeed = 3.69;
    } else if (fallingSpeed == "Jupiter 24.79 m/s²") {
        fallingSpeed = 24.79;
    } else if(fallingSpeed == "Mond 1.62 m/s²"){
        fallingSpeed = 1.62;
    }
    
    let throwingDistance = ((speed * speed) * Math.sin(2 * angle)) / fallingSpeed;
    throwingDistance = Math.round(throwingDistance);
    
    if(throwingDistance == distanceToMonster){
         y = document.createElement("paragraph");
         alert("YAY, YOU HAVE HIT THE MONSTER");
    } else if(throwingDistance > distanceToMonster) {
        let x = throwingDistance - distanceToMonster; 
        alert("Schade, das war " + x + "Meter zu weit. Du hast " + throwingDistance + "Meter weit geworfen");
    } else if(throwingDistance < distanceToMonster){
        let x = distanceToMonster - throwingDistance;
        alert("Schade, das war " + x + "Meter zu kurz. Du hast " + throwingDistance + "Meter weit geworfen");
    }
        Tries--;
        if(Tries == 0){
            alert("Du hast verloren.");
        }
    }

let upperLimit = 0;
let guessNumber = 0;
let num = 0;
let counter = 0;


function guessingNumber(upperLimit, guessNumber, num, counter){
        upperLimit = document.getElementById('limit').value;
        guessNumber = document.getElementById('guess').value;
        num = Math.round(Math.random()*upperLimit);
        counter = document.getElementById('tries').value;
        console.log(num, counter, upperLimit);
        if(guessNumber == num){
            alert("Juhuu, das war die richtige Zahl");
        } else if (guessNumber < num){
            alert("Schade, deine Zahl ist zu niedrig.");
        } else if(guessNumber > num) {
            alert("Schade, deine Zahl ist zu hoch.");
        }
        if(guessNumber > upperLimit){
            alert("Diese Zahl ist außerhalb des bestimmten Wertebereichs");
        }
        counter--;
        if(counter == 0){
            alert('Du hast leider verloren. Du hast keine Versuche mehr!');
        }
}

