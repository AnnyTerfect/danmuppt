<?php
    $con=mysqli_connect("localhost","root","ZqcAnnyTerfect123!","danmu");
    $sql="insert into danmu (message) values('{$_POST['message']}')";
    mysqli_query($con,$sql);
    mysqli_close($con);
    $con=mysqli_connect("localhost","root","ZqcAnnyTerfect123!","danmu");
    $sql="update curDanmu set curDanmu=curDanmu+1";
    mysqli_query($con,$sql);
    mysqli_close($con);
 ?>
