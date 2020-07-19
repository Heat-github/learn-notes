$.noConflict();
jQuery(document).ready(function($){

  $(window).resize(function(){
    canSize();
    if(btnNum[0]){canFun1();}
  });

});