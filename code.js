//start() function for start button
function start(){
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
}

//stop() function for stop button
function stop(){
    clearInterval(timer);
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
}

//dom req
function getData(){
    var loadedData = loadData();
    return loadedData;
}

//dom req
function dataRow(legend, value, units){
    msg = " <td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

//same function but better bc it's more efficient with loops with the change order request
function countdownV3() {
    var count = 10;

    for(var i = 0; i <= 10; i = i ++) {

        if(i > 5){
            setTimeout(function (){
                document.getElementById("countdowntimer").innerHTML = count;
                count--;
                }, 1000 * i);
        } else if(i > 4 && i != 8){
            setTimeout(function (){
                document.getElementById("countdowntimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
                }, 1000 * i);


        } else {
             setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = "blast off";
                count--;
            }, 1000 * i);
        }

    }

    setTimeout(function () {
        document.getElementById("countdowntimer").innerHTML = "blast off";
        count--;
    }, 11000 * i);

}

//same function but better bc it's more efficient with loops
function countdownV2() {
    var count = 10;

    for(var i = 0; i <= 10; i = i ++) {
        setTimeout(function (){
        document.getElementById("countdowntimer").innerHTML = count;
        count--;
        }, 1000 * i);

    }

    setTimeout(function () {
        document.getElementById("countdowntimer").innerHTML = "blast off";
        count--;
    }, 11000 * i);

}
  
  //creating a countdown function to count from 10 to 1 and then blastoff /
function countdown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countdowntimer").innerHTML = count;
    count = count - 1
    //then go to 9
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 1000);
    //number 8
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 2000);
    //number 7
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 3000);
    //number 6
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 4000);
    //number 5
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 5000);
    //number 4
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 6000);
    //number 3
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 7000);
    //number 2 
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 8000);
    //number 1
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 9000);
    //blastoff
    setTimeout(function() {
        document.getElementById("countdowntimer").innerHTML = count;
        count = count - 1
    }, 10000);
}

//function to play craps game
function playCraps();{
    var die1;
    var die2;
    var sum;
    die1 = math.ceil(math.random()*6);
    die2 = math.ceil(math.random()*6);
    sum = die1 + die2
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;

    if(sum == 7 || sum == 11){
        document.getElementById("crapsRes").innerHTML = "craps! you lose";
    }
    if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsRes").innerHTML = "doubles, you win";
    } 
    else {
        document.getElementById("crapsRes").innerHTML = "push! please try again.";
    }
}

//create a countdown timer from 10 to blast off
function runSandbox() {
    var count = 10;

    for(var i = 0; i <= 10; i = i ++) {
        setTimeout(function (){
        document.getElementById("countdowntimer").innerHTML = count;
        count--;
        }, 1000 * i);

    }

    setTimeout(function (){
    document.getElementById("countdowntimer").innerHTML = "blast off";
    count--;
    }, 11000 * i);

}

//to play a specific sound
function playstation(){
    mysound = new sound("us-lab-background.mp3");
    mysound.play();
}

//to play a secific sound
function playspaceoddity(){
    mysound = new sound("David_Bowie_Space_Oddity.mp3");
    mysound.play();
}

//to play any sound
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.pause();
    }

    this.stop = function(){
        this.sound.pause();
    }
}
//data info
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eC02,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eC02 = cssSensor_eC02;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ
    }
}