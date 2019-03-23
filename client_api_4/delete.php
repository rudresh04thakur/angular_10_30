<?php
    $data = json_decode(file_get_contents('php://input'));
    $con = mysqli_connect("localhost","root","","10_30_WEEKEND");
    $str = "DELETE FROM users WHERE id='$data'";
    $result = mysqli_query($con,$str) or die(json_encode(["msg"=>"Delete Unsuccessful","error"=>mysqli_error($con),"class"=>"danger"]));
    echo json_encode(["msg"=>"Delete Successful","error"=>"","class"=>"success"]);
?>