
function distancia() 
{
    var distancia;

    //verifica que el ingreso no sea nulo, vacio o texto.
    while (distancia == null || /\D/.test(distancia) || distancia == "") {
        distancia = prompt("Ingrese distancia: ", "");
    };

    document.write("<h1>Modulo 3 - Unid 3</h1>");
    document.write("<h2>Ejercicio 1</h2>");
    document.write("<h3>El medio de transporte recomendado es: ");

    if(distancia >= 0 && distancia <= 1000) {document.write("a pie.")}
    else if(distancia > 1000 && distancia <= 10000) {document.write("bicicleta.")}
    else if(distancia > 10000 && distancia <= 30000) {document.write("colectivo.")}
    else if(distancia > 30000 && distancia <= 100000) {document.write("auto.")}
    else if(distancia > 100000) {document.write("avión.")};

    document.write("</h3>")

    document.write('<input type="button" value="Volver" onclick="location.reload()"/>');
}

function ordenar() 
{
    var mayor = 0;
    var numeros = [];

    document.write("<h1>Modulo 3 - Unid 3</h1>");
    document.write("<h2>Ejercicio 2</h2>");
    document.write("<h3>Números ingresados: </h3>");

    for (var i = 0; i < 5; i++)
    {
        numeros[i] = prompt("Ingrese número: ", "");
        if (parseInt(numeros[i]) > mayor) { mayor = numeros[i] };
        document.write("<p>");
        document.write(numeros[i]);
        document.write("</p>");
    }

    document.write("<h3>El número mayor es: ");
    document.write(mayor);
    
    document.write("</h3>")

    document.write('<input type="button" value="Volver" onclick="location.reload()"/>');
}


