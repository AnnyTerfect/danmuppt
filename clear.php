<?php
    include("mysqli_connect.php");
    $sql="delete from danmu where 1";
    mysqli_query($con,$sql);
    $sql="update curDanmu set curDanmu=0";
    mysqli_query($con,$sql);
    mysqli_close($con);
 ?>
