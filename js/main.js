function validateForm()
{
	var validFields = true;
	
	if("" == $("#nameInput").val().replace(/ /g,""))
	{
		validFields = false;
		errorMessage = "Introduce nombre";
	}
	if("" == $("#emailInput").val().replace(/ /g,""))
	{
		validFields = false;
		errorMessage = "Introduce email";
	}
	if("" == $("#msjInput").val().replace(/ /g,""))
	{
		validFields = false;
		errorMessage = "Introduce mensaje";
	}
	
	if(validFields)
	{		

		$("#buttonInput").html('<i class="fa fa-spinner fa-spin"></i>');
		setTimeout(function(){
			someWebService();
		},500);
		
	}
	else
	{
		swal("Favor de llenar campos");
	}
}

$("#buttonInput").on("click",function(){
	
	validateForm();
	
});


function someWebService()
{
	$.post("/js/sendbyemail.php", 
	{
		Nombre : $("#nameInput").val(),
		Correo: $("#emailInput").val(),
		Mensaje  : $("#msjInput").val()
	}, 

	function(response)
	{
		if(response.responseStatus)
		{			
			swal("En breve le responderemos", "", "success");
			$("#buttonInput").html("Enviar");
		}
		
	}, 'json')
	.fail(function(d)
	{	
		$("#buttonInput").html("Enviar");
		console.log(d);
	});
}

