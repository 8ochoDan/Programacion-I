var cantidadDatos = prompt("Ingrese la cantidad de datos que desea ingresar:");

cantidadDatos = parseInt(cantidadDatos);
if (isNaN(cantidadDatos) || cantidadDatos <= 0) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    var datos = [];
    for (var i = 0; i < cantidadDatos; i++) {
        var dato = prompt("Ingrese el dato #" + (i + 1) + ":");
        datos.push(parseFloat(dato));
    }
    var suma = 0;
    for (var i = 0; i < cantidadDatos; i++) {
        suma += datos[i];
    }
    var promedio = suma / cantidadDatos;
    var contador = 0;
    for (var i = 0; i < cantidadDatos; i++) {
        if (datos[i] > promedio) {
            contador++;
        }
    }

    alert("El promedio de los datos ingresados es: " + promedio.toFixed(2) + "\n" +
          "De los datos ingresados, " + contador + " son mayores que el promedio.");
}
