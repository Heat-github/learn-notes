$.noConflict();
jQuery(document).ready(function($){

  $(window).resize(function(){
    setCanSize();
    if(btnNum[0]){canFun0();}
    if(btnNum[1]){canFun1();}
    
  });

  $(".left>p").click(
    function(){
      if($(this).hover()){
        $(this).next().slideToggle(100);
      }
  });

});