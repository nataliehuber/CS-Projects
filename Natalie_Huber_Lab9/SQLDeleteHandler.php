<?php

$id = $_REQUEST['id'];

$connection = @mysqli_connect (localhost, root, "22scruffy", lab5);

$deletequery= "delete from store where id = '$id';" ;

$resultdelete = mysqli_query($connection,$deletequery);


if(mysqli_connect_errno())
      {
echo "<h4>Failed to connect to MySQL: </h4>".mysqli_connect_error(); }
else
{
echo "<h4>Deleted successfully from table 'store' </h4>";
}


?>