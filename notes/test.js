function peopleClass(){    //人类函数
    this.type = "人";
}
peopleClass.prototype = {  //人类函数方法
    getType:function(){
        console.log("这是一个人");
    }
}

function stuClass(name,sex){//学生函数
    this.name = name;
    this.sex = sex;
    //函数的继承，学生继承人类函数
    peopleClass.apply(this,arguments); 

    //学生函数继承人类函数的属性或方法
    var prop;
    for(prop in peopleClass.prototype){
        var proto = this.constructor.prototype;
        if(!proto[prop]){
            proto[prop] = peopleClass.prototype[prop];
        }
        proto[prop]["super"] = peopleClass.prototype;
    }
}
var stu = new stuClass("alex","man");  //函数的实例化
//如此之后，stu即可继承人类函数的 type 属性和 getType 方法