<?php
/**
 * Created by PhpStorm.
 * User: Gerardo
 * Date: 5/2/2019
 * Time: 19:01
 */
//Function to check valid email
function sanitize_my_email($field){
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if(filter_var($field,FILTER_VALIDATE_EMAIL)){
        return true;
    }
    else{
        return false;
    }
}
//proccess to send email
$to_email = 'admin@soccergool.com';
$from_email = 'test@gmail.com';
$subject = 'Testing';
$message = 'This is a test message';
//check if email is correct
$secure_check = false;
$secure_check = sanitize_my_email($from_email);
if($secure_check == false){
    echo "Invalid 'from' email";
}
else{
$headers = 'From ' + $from_email;
//check if 'to email' is valid
$secure_check = false;
$secure_check = sanitize_my_email($to_email);
if($secure_check == false){
    echo "Invalid 'to' email";
}
else{
    mail($to_email,$subject,$message,$headers);
}
}

?>