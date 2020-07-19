onload = function(){
    console.log("alex");
    console.log("Jenny");
    canSize();
    initial();
}
btnNum = new Array();
function initial(){
    var x = document.getElementsByClassName("canCss");
    for(i=0;i<x.length;i++){btnNum[i]=0;}
}

function canSize(){
    var cw = document.documentElement.clientWidth;
    var ctt = document.getElementsByClassName("content");
    var cttw = ctt[0].offsetWidth;
    var cvs = document.getElementsByClassName("canCss");
    for(i=0;i<cvs.length;i++){
        ctx = cvs[i].getContext("2d");
        w = cttw - cw*0.01 - 16;
        h = 9*w/16;
        ctx.canvas.width = w;
        ctx.canvas.height= h;
    }
}

function canFun1(){
    btnNum[0] = 1;
    var c1 = document.getElementById("can1");
    c1.style.border = "2px solid orange";
    var ctx1 = c1.getContext("2d");
    ctx1.lineWidth = 5;
    ctx1.lineCap = "round"; 
    ctx1.strokeStyle = "red";
    ctx1.fillStyle = "blue";

    ctx1.beginPath();
    ctx1.moveTo(10,10);
    ctx1.lineTo(100,50);
    ctx1.lineTo(50,80);
    ctx1.lineTo(10,10);
    ctx1.lineTo(100,50);
    ctx1.stroke();
    ctx1.strokeRect(100,50,20,20);  
    ctx1.fillRect(120,20,20,20);
    
    ctx1.beginPath();
    ctx1.rect(120,60,60,60);
    ctx1.fill();            //如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径，然后填充该路径
}
