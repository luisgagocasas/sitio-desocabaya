<?php
include_once('MCAPI.class.php');
$respuesta = new stdClass();
$apikey="us10-7a24cd2ff378616491c4b303f-7de6a6aac2";
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