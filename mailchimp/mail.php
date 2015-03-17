<?php
include_once('MCAPI.class.php');
$respuesta = new stdClass();
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$my_email = $_POST['correo'];
//Conexión
$apikey = '4ba683b181c950e368e81d4390cb9a12-us10';
$listId = '7de6a6aac2';
$apiUrl = 'http://api.mailchimp.com/1.3/';
//
$api = new MCAPI($apikey);
$merge_vars = array('FNAME'=>$nombre, 'LNAME'=>$apellido);
$retval = $api->listSubscribe($listId,$my_email,$merge_vars);
if ($api->errorCode){
	$respuesta->mensaje = "\tCode=".$api->errorCode."\n";
	$respuesta->mensaje .= "\tMsg=".$api->errorMessage."\n";
} else {
    $respuesta->mensaje = "<div class=\"mensaje\">Revise su correo para confirmar tu suscripción.</div>";
}
echo json_encode($respuesta);
?>