$("#login_show a").click(function () {
    window.location.href = "../html/login.html"
})

$('.dl a').click(function () {
    $.ajax({
        type: "GET",
        url: "../php/get1.php",
        data: {
            user: $('.user').children('input').val(),
            pass: $('.pas').children('input').val()
        },
        success: function (a) {
            var res = JSON.parse(a)
            if (res.code === 0) {
                $(".dlts").css("display", "block")
                $(".dlts").children('p').text("用户不存在");
            } if (res.code === 1) {
                $(".dlts").css("display", "block")
                $(".dlts").children('p').text("密码错误");
            } if (res.code === 2) {
                var date = new Date();
                date.setDate(date.getDate() + 7);
                document.cookie = "user=" + $('.user').children('input').val() + ";expires=" + date.toGMTString();
                location.href = "../html/index.html"
            }
        }
    })
})
$('.user input').blur(function () {
    $(this).parent().css("border", "1px solid #aaaaaa")
})
$('.user input').focus(function () {
    $(this).parent().css("border", "1px solid #e02025")
})
$('.pas input').blur(function () {
    $(this).parent().css("border", "1px solid #aaaaaa")
})
$('.pas input').focus(function () {
    $(this).parent().css("border", "1px solid #e02025")
})

$('.ts a').click(function(){
    window.location.href="../html/regsiter.html";
})