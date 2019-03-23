<?php
        $con = mysqli_connect("localhost","root","","10_30_WEEKEND");
        $str = "SELECT * FROM users";
        $result = mysqli_query($con,$str) or die(mysqli_error($con));
        $arr = [];
        while($row = mysqli_fetch_assoc($result)){
            array_push($arr,$row);
            //echo json_encode($row);
        }
        echo json_encode($arr);
    
?>