<?php

 if(!empty($_POST['Nombre']) AND !empty($_POST['Correo']) AND !empty($_POST['Mensaje'])){

$to ="ldaa_cony@hotmail.com";
$headers = "Content-Type: text/html; charset=iso-8859-1\n"; 
$headers .= "From:".$_POST['Nombre']."\r\n";			
$tema="Contacto desde el Sitio Web WellPro";
$mensaje="
<table border='0' cellspacing='2' cellpadding='2'>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Nombre:</strong></td>
    <td width='80%' align='left'>$_POST[Nombre]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>E-mail:</strong></td>
    <td align='left'>$_POST[Correo]</td>
  </tr>
   <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Asunto</strong></td>
    <td width='80%' align='left'>$_POST[Mensaje]</td>
  </tr>
  
</table>
";
@mail($to,$tema,$mensaje,$headers); 
	
    $response["responseStatus"] = true;//
	   echo json_encode($response);
	
} else {	
	$response["responseStatus"] = false;	
	echo json_encode($response);
}
?>