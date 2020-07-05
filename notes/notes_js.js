function cataTrans(){       //手机端目录展开动画
    x = screen.availWidth;
    element = document.getElementById('acatalog');
    if(x>1000){element.style.display="block";}
    else{
        if(element.style.display.match("none")){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    }
}

