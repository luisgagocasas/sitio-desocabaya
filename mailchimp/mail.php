<?php
include_once('MCAPI.class.php');
$respuesta = new stdClass();
$apikey="4ba683b181c950e368e81d4390cb9a12-us10";
$mailchimp = new MCAPI($apikey,true);
$email=$_POST['correo'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$listId="7de6a6aac2";
$merge_vars = array('NOMBRES'=>$nombre, 'APELLIDOS'=>$apellido);

$resultado=$mailchimp->listSubscribe($listId,$email,$merge_vars);
//Controlamos los errores
if (!$mailchimp->errorCode){
    $respuesta->mensaje ="\tCode=".$mailchimp->errorCode."\n";
    $respuesta->mensaje .="\tMsg=".$mailchimp->errorMessage."\n";
}
else {
   $respuesta->mensaje = "<div class=\"mensaje\">Revise su correo para confirmar tu suscripción.</div>";
}
echo json_encode($respuesta);
?>