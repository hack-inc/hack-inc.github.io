<?php
$adminkey = '0x1110011';
$form = htmlspecialchars($_POST['form1']);
if ($form == $adminkey){
header('Location: https://google.com/');
} else {
echo("Wrong Key, Try Again");
}