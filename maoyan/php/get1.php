<?php
$a=$_GET["user"];
$b=$_GET["pass"];
// . 拼接字符串  js中的+
// 连接数据库 进行判断 数据库返回一个结果
// 状态码 数字   
// '{"code":0}'   '{"code":1}'  '{"code":2}'
//    用户名不存在    密码不正确     成功
$arr=array("zhangxv","yikai","chunyuan");
$arr2=array("zhangxv"=>"123","yikai"=>"123","chunyuan"=>"123");
// in_array(A,B) A是否在B中
if(in_array($a,$arr)){
    if($arr2[$a]==$b){   
        // 密码匹配
        echo '{"code":2}';
    }else{
        // 用户名存在 密码错误
        echo '{"code":1}';
    }
}else{
  // 用户名不存在
  echo '{"code":0}';
}

?>