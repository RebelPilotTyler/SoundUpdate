//This page is comprised of sample classes.
//By Tyler Widener
//tylerwidenerlm@gmail.com
class Rocket{
    //name states first
    constructor(
        fuelType, 
        weight,
        power
    ){ //substantiate
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch function started");
        alert("Launch sequence started");
        return true;
    }
    land(){
        console.log("land function started");
        alert("Land sequence started");
        return true;
    }
    detachThruster(thrusterID){
        console.log("detachThruster() function started");
        alert("Thruster " + thrusterID + " has been detached");
        return true;
    }
}
class Mission{ //The mission class is included as an example for now.
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spacecraft,
        numOfAstronauts
    ){ //substantiate
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spacecraft = spacecraft;
        this.numOfAstronauts = numOfAstronauts;
    }
    displayMissionParameters(){
        console.log("displayMissionParameters function started");
        alert("The spacecraft " + this.spacecraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear
         + " with an O2 level of " + this.oxyLvl + "%");
    }
    launch(){
        console.log("launch() function started");
        alert("Launch sequence started");
    }
}
function launchFall() {
    console.log("launchFall() function started");
    fallLaunch.launch();
}
function displayFall() {
    console.log("displayFall() function started");
    fallLaunch.displayMissionParameters();
}
function launchSpring() {
    console.log("launchSpring() function started");
    springLaunch.launch();
}
function displaySpring() {
    console.log("displaySpring() function started");
    springLaunch.displayMissionParameters();
}