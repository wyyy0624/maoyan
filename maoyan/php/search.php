<?php
$cont=$_GET["cont"];
header('content-type:text/html;charset=utf-8');// 避免出现乱码
header("Content-Type: text/html;charset=gb2312");// 避免出现乱码
$a=file_get_contents("https://maoyan.com/ajax/suggest?kw=".$cont."&size=10");

echo mb_convert_encoding($a,'gbk','utf-8');// 避免出现繁体字

?>