function iniciarSesion(){
    if ($("#inputEmail").val().length == 0 ||$("#inputPasword").val().length == 0) {
        alert("Todos los campos son obligatorios");
    
    } else {
    
        $.ajax({
            url:"http://152.70.141.56:8080/api/user/" +$("#inputEmail").val() +"/" +$("#inputPasword").val(),
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                console.log(respuesta);
                relocate(respuesta)

            },
            error: function (xhr, status) {
                alert("ha sucedido un problema");
            }
        });
    }
}
function relocate(respuesta){

    if (respuesta.id != null){
        window.location = "inicio.html";
    }else{
        alert("credenciales incorrectas");
    }

}