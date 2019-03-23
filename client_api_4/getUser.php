<?php
        $id = $_REQUEST['id'];
        $con = mysqli_connect("localhost","root","","10_30_WEEKEND");
        $str = "SELECT * FROM users Where id='$id'";
        $result = mysqli_query($con,$str) or die(mysqli_error($con));
        echo json_encode(mysqli_fetch_assoc($result));
?>