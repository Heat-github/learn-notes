$.noConflict();    //避免与其他语言的 $ 快捷方式冲突

jQuery(document).ready(function($){
  //再将 $ 传给 ready ，在函数内使用 $ 符号也不会冲突
  //ready函数保证DOM加载完成在调用 jQuery 函数库
  
  $(".catabutton").click(function(){    //手机端(小屏幕)目录展开与收合
    x = document.documentElement.clientWidth;
    if(x < 888){$("#acatalog").slideToggle(200);}
    else{$("#acatalog").slideDown(200);}
  })
T
});