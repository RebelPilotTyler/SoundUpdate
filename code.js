//This code controls the main page
//By Tyler Widener
//tylerwidenerlm@gmail.com
function play_craps() { //Defines the function play_craps
    console.log("play_craps() function started"); //Writes a message to the console saying that the game has started
    var die1 = Math.ceil(Math.random() * 6); //defines a variable that is assigned a random float between 0 and 6, which is rounded up.
    var die2 = Math.ceil(Math.random() * 6); //defines another variable that is assigned a random float between 0 and 6, which is rounded up.
    var sum = die1 + die2; //defines a variable that is assigned the sum of the two random numbers
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //Write the value of the first die to the screen
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //Write the value of the second die to the screen
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //Write the value of the sum of the two dice to the screen
    if (sum == 7 || sum == 11) { //if the sum of the random numbers is equal to 7 or 11...
        document.getElementById("finalResult").innerHTML = "CRAPS - you lose!"; //Write a losing statement to the screen.
        document.getElementById("lossRes").innerHTML = loss; //Displays the number of losses to the screen.
        loss++; //Updates the number of losses
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If you didn't lose, the two dice have equal values, and the values are both even...
        document.getElementById("finalResult").innerHTML = "DOUBLES - you win!"; //Write a victory statement to the screen
        document.getElementById("winsRes").innerHTML = wins; //Displays the number of wins to the screen
        wins++; //Updates the number of wins
    }
    else { //If you didn't win or lose...
        document.getElementById("finalResult").innerHTML = "Draw - You neither won nor lost. Please try again!"; //Write a statement saying that you didn't win or lose
        document.getElementById("tieRes").innerHTML = tie; //Displays the number of draws to the screen
        tie++; //Updates the number of draws
    }

}
function blastoff() { //This function is now obsolete, replaced by btrBlastoff()
    var currTime = 50;
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}
function btrBlastoff() {
    console.log("btrBlastoff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) { //Go through the for loop 11 times
        setTimeout(function() {
            if (currTime >= 25) { //If countdown is greater than or equal to 25
                document.getElementById("countdownTimer").innerHTML = currTime; //Write the current time to the screen
            }
            else if (currTime == 0) { //If countdown is equal to 0
                    document.getElementById("countdownTimer").innerHTML = "Blastoff!"; //Display the blastoff message
            }
            else { //If the countdown is less than 25
                document.getElementById("countdownTimer").innerHTML = "Warning, less than halfway to launch, time left = " + currTime; //Write the current time and a message to the screen
            }
            currTime -= 5; //Update current time
        }, i * 5000); //Update the timer
    }
}
function start() {
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop() {
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
function playStation() { //Plays the space station sounds
    console.log("playStation() function started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
function sound(srcFile) { //universal play sound function
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function playTheme() { //Plays The Eternal Voyage Main Theme
    console.log("playTheme() function started");
    //mySound = new sound(""); FIX THIS LINE!!! Filename goes here.
    mySound.play();
}