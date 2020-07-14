
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

