<?php

$persona = new stdClass();//stdClass() es una clase standard
$persona->nombre = "Juan";
$persona->edad = 66;

$objJson = json_encode($persona);//json_encode() transforma al objeto en un objeto de tipo json

echo $objJson;
?>