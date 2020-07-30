$.noConflict();    //避免与其他语言的 $ 快捷方式冲突

    jQuery(document).ready(function($){
    //再将 $ 传给 ready ，在函数内使用 $ 符号也不会冲突
    //ready函数保证DOM加载完成在调用 jQuery 函数库
    $(".catabutton").click(function(){    //手机端(小屏幕)目录展开与收合
        var x = document.documentElement.clientWidth;
        if(x < 888){$("#acatalog").slideToggle(200);}
    });

    $(window).resize(function(){        //调整窗口大小时
        var x = document.documentElement.clientWidth;
        if(x > 888){
        $("#acatalog").slideDown(200);
        }
        else {$("#acatalog").slideToggle(200);}
    });
    $(".grid p:nth-child(1)").click(function(){$(".grid").css("grid-auto-flow","column");});
    $(".grid p:nth-child(2)").click(function(){$(".grid").css("grid-auto-flow","row");});
    // $(window).scroll(function(){
    //     var scrollHeight = $(window).scrollTop();
    //     var winsowHeight = $(window).height();
    //     console.log(scrollHeight);
    //     var cataHeight = $("#catalog").height();
    //     var cententHeight = $("#content").height();
    //     console.log(cataHeight,cententHeight);
    //     var value = scrollHeight-cataHeight+winsowHeight;
    //     if(scrollHeight > cataHeight-winsowHeight+52 && scrollHeight < cententHeight + 52 -cataHeight){
    //         $("#catalog").css("transform","translateY(" + value + "px");
    //     }else if(scrollHeight <= cataHeight-winsowHeight){
    //         $("#catalog").css("transform","0px");
    //     }
    // });
    });