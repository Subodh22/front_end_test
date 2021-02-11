<?php

if(isset($_POST)&& !empty($_POST))
{
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == 'admin' && $password=="admin"){?>
  {
    "success":true,
    "secret":"this is the seceret no one who know but admin"}
<?php}
else{
?>}
{
  "sucess":false,
  "message":"Invalid credentials"
}
<?php
}}else{?>
{
  "success":false,
  "message":"Only Post access accepted"

}
<?php}?>






>
