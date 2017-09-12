<?php
    include("mysqli_connect.php");
    $sql="select * from danmu";
    $result=mysqli_query($con,$sql);
    for($i=0;$i<$_POST["number"];$i++)
        $row=mysqli_fetch_array($result);
    echo $row[0];
    mysqli_close($con);
 ?>
