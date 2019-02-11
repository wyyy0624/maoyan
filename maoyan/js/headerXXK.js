$('#header_ul>li').click(function(){
    $("#header_wrap").siblings("div").css("display","none");
    $("#header_wrap").siblings("div").eq($(this).index()).css("display","block")
    $(this).siblings("li").css("background","#fff").children("a").css("color","#000");
    $(this).css("background","#ef4238").children("a").css("color","#fff");
})