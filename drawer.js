
lights = ["D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14","D15"];


function fillCircle(xCoord, yCoord, color, canvas) {
    var can = "myCanvas"+canvas;
    var ctx = document.getElementById(can).getContext("2d");
    ctx.beginPath();
    ctx.arc(xCoord,yCoord,20,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();
}

function drawCircle(xCoord, yCoord, canvas) {
    var can = "myCanvas"+canvas;
    var ctx = document.getElementById(can).getContext("2d");
    ctx.beginPath();
    ctx.arc(xCoord,yCoord,20,0,2*Math.PI);
    ctx.fillStyle="#505050";
    ctx.fill();
    ctx.fillStyle="#000";
    ctx.stroke();
}

function label(xCoord, yCoord, labelText, canvas) {
    var can = "myCanvas"+canvas;
    var ctx = document.getElementById(can).getContext("2d");
    ctx.font = "12px Arial";
    ctx.fillStyle="#000";
    ctx.fillText(labelText, xCoord, yCoord);
}

function buttons(x, y) {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "16px Arial";
    ctx.fillStyle="#000";
    ctx.fillRect(x,y,50,20);
    ctx.fillRect(x+70,y,50,20);
    ctx.fillStyle="#FFF";
    ctx.fillText("High", x+8, y+15);
    ctx.fillText("Low", x+80, y+15);
}

function light(index) {
    var thisLight = lights["D"+index];
    thisLight.turnOn();
}

function off(index) {
    var thisLight = lights["D"+index];
    thisLight.turnOff();
}

function createLight(xCoord, yCoord, theColor, labelText, canvas) {
    drawCircle(xCoord,yCoord, canvas);
    label(xCoord+25,yCoord+2,labelText,canvas);
//    buttons(xCoord+70,yCoord-15);
    var result = new Object();
    result.x = xCoord;
    result.y = yCoord;
    result.color = theColor; 
    result.text = labelText;
    result.canvas = canvas;
    result.turnOn = function(){ fillCircle(this.x,this.y,this.color, this.canvas);}; 
    result.turnOff = function(){ drawCircle(this.x,this.y, this.canvas);};
    return result;
}

function draw() {
    lights["D8"] = createLight(50,40,"#F22", "D8", "2");
    lights["D7"] = createLight(50,100,"#2F2", "D7", "2");
    lights["D6"] = createLight(50,160,"#F22", "D6", "2");
    lights["D5"] = createLight(50,220,"#2F2", "D5", "2");
    lights["D4"] = createLight(50,280,"#F22", "D4", "2");
    lights["D3"] = createLight(50,340,"#2F2", "D3", "2");
    lights["D2"] = createLight(50,400,"#F22", "D2", "2");
    lights["D15"] = createLight(50,40,"#FF4", "D15", "1");
    lights["D14"] = createLight(50,100,"#FF4", "D14", "1");
    lights["D13"] = createLight(50,160,"#44F", "D13", "1");
    lights["D12"] = createLight(50,220,"#44F", "D12", "1");
    lights["D11"] = createLight(50,280,"#F82", "D11", "1");
    lights["D10"] = createLight(50,340,"#F82", "D10", "1");
    lights["D9"] = createLight(50,400,"#F82", "D9", "1");
}

