
$(document).ready(function () {
    $("#enviarWhats").click(function (e) {
        var nombre = $("#textoWhats").val();

        const arrayTelefono = ["541141620783"];
        const telefono = Math.floor(Math.random() * arrayTelefono.length);

        var url =
            "https://api.whatsapp.com/send?phone=" +
            arrayTelefono[telefono] +
            "&text=Web: %20Hola,%20Lo%20hacemos%203D!%20me%20gustaría%20hacerles%20una%20consulta:";

        window.open(url, "_blank");
        $("#myModal").modal("hide");
    });

});