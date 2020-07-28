onload = function(){
    modeFunc();
    draw();
};
function addEvent(obj,event,fun){
    if(obj.addEventListener){
        obj.addEventListener(event,fun,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+event,fun);
    }
}

function g(name,type){
    var x;
    type = arguments[1] ? arguments[1] : "id";
    if(type == "id"){
        x = document.getElementById(name);
        return x;
    }
    else if(type == "cls"){
        x = document.getElementsByClassName(name);
        return x;
    }
    else if(type == "tag"){
        x = document.getElementsByTagName(name);
        return x;
    }
    else if(type == "name"){
        x = document.getElementsByName(name);
        return x;
    }
}

function modeFunc(){
    var time = new Date().getHours();
    elet1 = document.getElementsByClassName("darkmode");
    elet2 = document.getElementsByTagName("body");
    elet3 = document.getElementsByClassName("catalog");
    elet4 = document.getElementsByClassName("note_tag");
    if(time>=19 || time<6){
        elet1[0].style.opacity = "1.0";
        elet2[0].style.backgroundColor = "rgb(60,60,60)";
        elet3[0].style.backgroundColor = "rgb(60,60,60)";
        for(i=0;i<elet4.length;i++){
            elet4[i].style.backgroundColor = "rgb(88,88,88)";
            elet4[i].style.color = "rgb(234,234,234)";
        }
    }
    else{
        elet1[0].style.opacity = "0.5";
        elet2[0].style.backgroundColor = "rgb(128,128,128)";
        elet3[0].style.backgroundColor = "rgb(128,128,128)";
        for(i=0;i<elet4.length;i++){
            elet4[i].style.backgroundColor = "rgb(246, 253, 236)";
            elet4[i].style.color = "rgb(0,0,0)";
        }
    }
}

function draw(){
    var c = document.getElementById("myCanvas2");
    var ctx=c.getContext("2d"); //获取context二维对象
    ctx.fillStyle="#808080";    //绘画红色矩形框
    ctx.fillRect(25,15,150,70);
}

function darkMode(){
    elet1 = document.getElementsByClassName("darkmode");
    elet2 = document.getElementsByTagName("body");
    bgc2 = window.getComputedStyle(elet2[0]).backgroundColor;
    elet3 = document.getElementsByClassName("catalog");
    elet4 = document.getElementsByClassName("note_tag");

    if(bgc2.match("128")){
        elet1[0].style.opacity = "1.0";
        elet2[0].style.backgroundColor = "rgb(60,60,60)";
        elet3[0].style.backgroundColor = "rgb(60,60,60)";
        for(i=0;i<elet4.length;i++){
            elet4[i].style.backgroundColor = "rgb(88,88,88)";
            elet4[i].style.color = "rgb(234,234,234)";
        }
    }
    else{
        elet1[0].style.opacity = "0.5";
        elet2[0].style.backgroundColor = "rgb(128,128,128)";
        elet3[0].style.backgroundColor = "rgb(128,128,128)";
        for(i=0;i<elet4.length;i++){
            elet4[i].style.backgroundColor = "rgb(246, 253, 236)";
            elet4[i].style.color = "rgb(0,0,0)";
        }
    }
}

//元素拖动, 添加到目标元素的末尾
/////////////////////////////////////////////////////////////////////////|
/////////////////////////////////////////////////////////////////////////|
    function allowDrop(ev)                                      /////////|
    {                                                           /////////|
        ev.preventDefault();                                    /////////|
    }                                                           /////////|
                                                                /////////|
    function drag(ev)                                           /////////|
    {                                                           /////////|
        ev.dataTransfer.setData("Text",ev.target.id);           /////////|
    }                                                           /////////|
                                                                /////////|
    function drop(ev)                                           /////////|
    {                                                           /////////|
        ev.preventDefault();                                    /////////|
        var data = ev.dataTransfer.getData("Text");             /////////|
        ev.target.appendChild(document.getElementById(data));   /////////|
    }                                                           /////////|
/////////////////////////////////////////////////////////////////////////|
/////////////////////////////////////////////////////////////////////////|