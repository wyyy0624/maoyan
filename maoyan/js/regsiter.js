// s随机验证码
var arr=[1,2,3,4,5,6,7,8,9]; 
suiji()
$('.random').children('div').first().click(function(){
    suiji()
})
function suiji(){
    var str="";
    for(var i=0;i<4;i++){
        var a=Math.floor(arr.length*Math.random());
        str+=arr[a];
    }
    $('.random').children('div').last().text(str);
}
$('.message input').blur(function(){
    if($(this).val()===""){
        $(this).siblings('div').css({"display":"block","color":"red"}).text('请输入验证码')
        $(this).css({'border-color':"#f76120"})
    }else if(random()!==""&&!random()){
        $(this).css({'border':"1px solid #f76120"})
        $(this).siblings('div').css({"display":"block","color":"red"}).text('验证码不正确')
    }else{
        $(this).siblings('div').css({"display":"block","color":"green"}).text('验证成功')
    }
})
$(".message input").focus(function(){
    $(this).css({'border-color':"#e02025"})
    $(this).siblings('div').css("display","none");
})
function random(){
    return $('.random').children('div').last().text()===$('.message input').val()
}
// 手机号
$(".tel input").blur(function(){
    if($(this).val()===""){
        $(this).siblings('div').css({"display":"block","color":"red"}).text('请输入手机号')
    }else if(tel()!==""&&!tel()){
        $(this).siblings('div').css({"display":"block","color":"red"}).text('请输入正确的手机号')
    }else{
        $(this).siblings('div').css({"display":"block","color":"green"}).text('手机号可用')
    }
})
$(".tel input").focus(function(){
    $(this).css({'border-color':"#e02025"})
    $(this).siblings('div').css("display","none")
    
})
function tel(){
    var reg=/^1{1}[3|4|5|7|8]{1}\d{9}$/;
    var teltest=reg.test($(".tel input").val())
    return teltest;
}
// 密码
$('.paswd input').keyup(function(){
    if($(this).val()===""){
        $(this).siblings('div').css({"display":"block","color":"red"}).text("请输入密码");
        $(this).css({'border-color':"#f76120"})
        $(this).siblings('strong').children('em').css({"background":'#eee'})
    }else if(paswd()){
        console.log(123)
        var pass1=/\d/;
        var pass2=/[a-z]/
        var pass3=/[A-Z]/
        var pass4=/^[0-9]{6,18}$/;
        var passzhong=pass1.test(this.value)&&pass2.test(this.value);
        var passgao=pass1.test(this.value)&&pass2.test(this.value)&&pass3.test(this.value);
        var passdi=pass4.test(this.value)
        if(passzhong){
            $('.paswd strong em')[0].style.background="orange";
            $('.paswd strong em')[1].style.background="orange";
            $('.paswd strong em')[2].style.background="#eeeeee";
        }
        if(passgao){
            $('.paswd strong em')[0].style.background="green";
            $('.paswd strong em')[1].style.background="green";
            $('.paswd strong em')[2].style.background="green";
        }
        if(passdi){
            $('.paswd strong em')[0].style.background="skyblue";
            $('.paswd strong em')[1].style.background="#eeeeee";
            $('.paswd strong em')[2].style.background="#eeeeee";
        }
        $(this).siblings('div').css({"display":"none"});
    }
})
$('.paswd input').focus(function(){
    $(this).siblings('div').css({"display":"block","color":"#666"}).text("密码长度为6-18位数字字母下划线组成")
    $(this).css({'border-color':"#e02025"})
})
function paswd(){
    var pass=/^\w{6,18}$/;
    var pastest=pass.test(pass.value);
    return pastest
}
// 确认密码
$('.reqpwd input').blur(function(){
    $(this).css({"border-color":"#f76120"})
    if(reqmima()){
        $(this).siblings('div').css({"display":"block","color":"green"})
        .text("密码一致")
    }else{
        $(this).siblings('div').css({"display":"block","color":"red"})
        .text("两次密码不一致,请重新输入")
    }
})
$('.reqpwd input').focus(function(){
    $(this).css({"border-color":"#e02025"})
})
function reqmima(){
    var req=$('.paswd input').val()===$('.reqpwd input').val()
    return req
}
// 注册按钮
$('.reg p').click(function(){
    if(random()&&tel()&&paswd()&&reqmima()){
        window.location.href="../html/login.html"
    }else{
        alert('请输入完整的注册信息')
    }
})