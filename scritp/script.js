function comprobar() {
    let nombreProducto, lineaProducto, versiones, versionactual, modulo, descrpcionPro, arquitectura1, requerimientosHardware, requerimientosSoftware, requerimientosOtros, requerimientosCliente, requerimientosClienteSw, sistemaOtros1, generales, adicioneales, clientes


    nombreProducto = document.getElementById("name").value
    document.getElementById("respuesta").innerHTML = "<td>" + nombreProducto + "</td>"

    console.log("nombreProducto")

    lineaProducto = document.getElementById("linea").value
    document.getElementById("linea-res").innerHTML = "<td>" + lineaProducto + "</td>"

    versiones = document.getElementById("versiones").value
    document.getElementById("respuesta-versiones").innerHTML = "<td>" + versiones + "</td>"

    versionactual = document.getElementById("versionactual").value
    document.getElementById("respuestactual").innerHTML = "<td>" + versionactual + "</td>"

    modulo = document.getElementById("modulo1").value
    document.getElementById("rtamodulo1").innerHTML = "<td>" + modulo + "</td>"

    descrpcionPro = document.getElementById("descripcion").value
    document.getElementById("rtadescripcion").innerHTML = "<td>" + descrpcionPro + "</td>"

    arquitectura1 = document.getElementById("arquitectura1").value
    document.getElementById("rtaarquitectura").innerHTML = "<td>" + arquitectura1 + "</td>"

    requerimientosHardware = document.getElementById("requerimientoshd").value
    document.getElementById("rtarequerimientoshd").innerHTML = "<td>" + requerimientosHardware + "</td>"

    requerimientosSoftware = document.getElementById("requerimientossw").value
    document.getElementById("rtarequerimientossw").innerHTML = "<td>" + requerimientosSoftware + "</td>"

    requerimientosOtros = document.getElementById("requerimientosOtros").value
    document.getElementById("rtaotros1").innerHTML = "<td>" + requerimientosOtros + "</td>"
    requerimientosCliente = document.getElementById("requerimientosCliente").value
    document.getElementById("rtasistemahd").innerHTML = "<td>" + requerimientosCliente + "</td>"

    requerimientosClienteSw = document.getElementById("requerimientosClientesw").value
    document.getElementById("rtasistemasw").innerHTML = "<td>" + requerimientosClienteSw + "</td>"

    sistemaOtros1 = document.getElementById("otrosRequerimientos").value
    document.getElementById("rtasistema1").innerHTML = "<td>" + sistemaOtros1 + "</td>"

    generales = document.getElementById("generales").value
    document.getElementById("respuestaGenerales").innerHTML = "<td>" + generales + "</td>"

    adicioneales = document.getElementById("adicionales").value
    document.getElementById("respuestaAdicionales").innerHTML = "<td>" + adicioneales + "</td>"

    clientes = document.getElementById("cliente").value
    document.getElementById("clientes").innerHTML = "<td>" + clientes + "</td>"
    /*  = document.getElementById("").value
    document.getElementById("").innerHTML="<td>" +  + "</td>" */


}

