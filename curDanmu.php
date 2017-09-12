<?php
    include("mysqli_connect.php");
    $sql="select * from curDanmu";
    $result=mysqli_query($con,$sql);
    $row=mysqli_fetch_array($result);
    echo $row[0];
    mysqli_close($con);
 ?>
