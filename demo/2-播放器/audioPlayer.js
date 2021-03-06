
onload = function(){
    [cw,aw] = getSize();
    console.log(cw,aw);
    setSize();
    window.setInterval(progressBar,50);
}
//js设置多个CSS
function setCss(obj,css){
    for(var attr in css){
    obj.style[attr] = css[attr];
    }
}
//获取浏览器宽度和屏幕宽度
function getSize(){
    return [document.documentElement.clientWidth,screen.availWidth]; 
}
//设置宽度适应
function setSize(){
    [cw,aw] = getSize();
    if((cw >= 800) && (aw > 450)){
        g("player").style.width = 0.5*cw + "px";
        g("player").style.marginLeft = 0.1*cw + "px";
        g("lyrics").style.display = "block";
        g("lyrics").style.idth = 0.3*cw + "px";
        g("bar").style.width = 0.4*cw + "px";
    }
    else{
        setCss(g("player"),{
            "width" : cw + "px",
            "minWidth" : "360px",
            "marginLeft" : 0,
        });
        g("lyrics").style.display = "none";
        g("bar").style.width = 0.8*cw + "px";
    }
    
}
//提供id(default)_、cls、tag 和 name 四种获取元素的方法
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
//计算时分秒，秒数取整
function calTime(t){
    var td = [0,0,0];
    t = Math.floor(t);
    td[2] = t%60;
    if(t >= 60){
        td[1] = Math.floor(t/60);
        if(td[1] >= 60){
            td[0] = Math.floor(td[1]/60);
            td[1] = td[1] % 60;
        }
    }
    for(var i in td){
        td[i] = td[i]>9 ? td[i] : "0"+td[i];
    }
    return td;
}
//播放或暂停
function playMusic(){
    var msc = g("music");
    var picCenter = g("center");
    var picPlay = g("play");
    var picPause = g("pause");
    if(msc.paused){
        picCenter.style.animationPlayState = "running";
        picCenter.style.WebkitAnimationPlayState = "running";
        picPlay.style.display = "none";
        picPause.style.display = "inline-block";
        msc.play();
    }
    else {
        picCenter.style.animationPlayState = "paused";
        picCenter.style.WebkitAnimationPlayState = "paused";
        picPlay.style.display = "inline-block";
        picPause.style.display = "none";
        msc.pause();
    }
}
function progressBar(){
    var msc = g("music");
    var tl = msc.duration;
    var ct = msc.currentTime;
    var per = ct/tl;
    var tld = calTime(tl);
    var ctd = calTime(ct);
    var pl = g("player").offsetWidth;
    g("curt").innerHTML=ctd[1]+" : "+ctd[2]+" / "+tld[1]+" : "+tld[2];
    [cw,aw] = getSize();
    if((cw >= 800) && (aw > 450)){
        var crl = (pl*0.8*per)-6;//进度条圆点的位移距离
        g("bar1").style.width = pl*per*0.8 + "px";
        g("circle1").style.transform = "translateX(" + crl +"px";
    }
    else{
        var crl = 288*per-6;//进度条圆点的位移距离
        g("bar1").style.width = 288*per + "px";
        g("circle1").style.transform = "translateX(" + crl +"px";
    }
    if((ct == tl) && msc.paused ){
        g("play").style.display = "inline-block";
        g("pause").style.display = "none";
    }
    /*
    if(lastTime == ct){
        g("player").style.animationPlayState = "paused";
        g("player").style.WebkitAnimationPlayState = "paused";
    }
    return ct;*/
}

