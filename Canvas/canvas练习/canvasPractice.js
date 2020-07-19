onload = function(){
    console.log("alex");
    console.log("Jenny");
    initial();
    setCanSize();
}
btnNum = new Array();
function initial(){
    var x = document.getElementsByClassName("canCss");
    for(i=0;i<x.length;i++){btnNum[i]=0;}
}

function getSize(clsName){
    var clsn = clsName;
    var ccww = document.documentElement.clientWidth;
    var cls = document.getElementsByClassName(clsn);
    var clsw = cls[0].offsetWidth;
    return [ccww,clsw];
}

function setCanSize(){
    var widths = getSize("content");
    var w = widths[1] - widths[0]*0.01 - 16;
    var h = 9*w/16;
    var cvs = document.getElementsByClassName("canCss");
    for(i=0;i<cvs.length;i++){
        ctx = cvs[i].getContext("2d");
        ctx.canvas.width = w;
        ctx.canvas.height= h;
    }
    return cvs.length;
}

function canFun0(){
    btnNum[0] = 1;
    var cw = document.documentElement.clientWidth;
    var can = document.getElementById("can0");
    can.style.border = "2px solid orange";
    var ctx = can.getContext("2d");
    ctx.lineWidth = 5;
    ctx.lineCap = "round"; 
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(cw*0.3,50);
    ctx.lineTo(50,80);
    ctx.lineTo(10,10);
    ctx.lineTo(cw*0.3,50);
    ctx.stroke();
    ctx.strokeRect(100,50,20,20);  
    ctx.fillRect(120,20,20,20);
    
    ctx.beginPath();
    ctx.rect(120,60,60,60);
    ctx.fill();            //如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径，然后填充该路径
}

function canFun1(){
    btnNum[1] = 1;
    var can = document.getElementById("can1");
    can.style.border = "2px solid orange";
    var [cw,w] = getSize("content");
    
    var ctx = can.getContext("2d");
    ctx.beginPath();
    ctx.arc(w*0.25,w*0.25,w*0.2,Math.PI/2,210*Math.PI/180,false);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(70,20);
    ctx.arcTo(120,30,120,70,50);
    ctx.lineTo(120,120);
    ctx.stroke();
}