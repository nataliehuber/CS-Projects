<?php

$Id = $_REQUEST['Id'];
$Name = $_REQUEST['Name'];
$Quantity = $_REQUEST['Quantity'];
$Price = $_REQUEST['Price'];

$connection = @mysqli_connect (localhost, root, "22scruffy", lab5); // please fill these parameters with the actual data
$insertquery= "insert into store (id, name, qty, price) values ('$Id', '$Name', '$Quantity', '$Price')";

$resultinsert = mysqli_query($connection,$insertquery);

      if(mysqli_connect_errno())
      {
echo "<h4>Failed to connect to MySQL: </h4>".mysqli_connect_error(); }
else
{
echo "<h4>Inserted successfully into table 'store'.";
include 'store.php';
}
?>