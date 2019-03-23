<?php
    $data = json_decode(file_get_contents('php://input'));
    if($data->Email!=""){
    $con = mysqli_connect("localhost","root","","10_30_WEEKEND");
    $str = "INSERT INTO users (FullName, Email, MobileNo, State, Comment, Agree ) VALUES ('$data->FullName','$data->Email','$data->MobileNo','$data->State','$data->Comment','$data->Agree')";
    $result = mysqli_query($con,$str) or die(json_encode(["msg"=>"Register Unsuccessful","error"=>mysqli_error($con),"class"=>"danger"]));
    echo json_encode(["msg"=>"Register Successful","error"=>"","class"=>"success"]);
    }else{
       echo json_encode(["msg"=>"Register Unsuccessful","error"=>"Empty Request","class"=>"danger"]);
    }
?>