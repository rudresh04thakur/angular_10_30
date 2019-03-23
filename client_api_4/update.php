<?php
    $data = json_decode(file_get_contents('php://input'));
    if($data->Email!=""){
    $con = mysqli_connect("localhost","root","","10_30_WEEKEND");
    $str = "UPDATE users set FullName='$data->FullName',
             Email='$data->Email', 
             MobileNo='$data->MobileNo',
              State='$data->State',
               Comment='$data->Comment',
                Agree='$data->Agree' Where id='$data->id'";
    $result = mysqli_query($con,$str) or die(json_encode(["msg"=>"Update Unsuccessful","error"=>mysqli_error($con),"class"=>"danger"]));
    echo json_encode(["msg"=>"update Successful","error"=>"","class"=>"success"]);
    }else{
       echo json_encode(["msg"=>"Update Unsuccessful","error"=>"Empty Request","class"=>"danger"]);
    }
?>