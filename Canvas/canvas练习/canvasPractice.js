onload = function(){
    console.log("alex");
    console.log("Jenny");
};

function canvasFunc1(){
    var c1 = document.getElementById("myCanvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.lineWidth = 5;
    ctx1.lineCap = "round"; //定义线帽，butt方角，round圆角，square两端增加线宽的一半
    ctx1.strokeStyle = "red";   //设定线条颜色
    ctx1.fillStyle = "blue";    //设定实心颜色

    ctx1.beginPath();       //创建新路径
    ctx1.moveTo(10,10);     //将画笔光标定位到指定位置
    ctx1.lineTo(100,50);    //定义画笔从当前坐标开始画直线到指定位置
    ctx1.lineTo(50,80);
    ctx1.lineTo(10,10);
    ctx1.lineTo(100,50);
    ctx1.stroke();          //开始绘制定义好的路径
    ctx1.strokeRect(100,50,20,20);  //绘制空心矩形，(起始坐标x，起始坐标y，长，宽)
    ctx1.fillRect(120,20,20,20);     //绘制实心矩形

    ctx1.beginPath();
    ctx1.rect(120,60,60,60);
    ctx1.fill();            //如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径，然后填充该路径
}
