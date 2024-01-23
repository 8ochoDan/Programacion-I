// Pide al usuario la cantidad de datos a ingresar
var cantidadDatos = prompt("Ingrese la cantidad de datos que desea ingresar:");

// Convierte la entrada del usuario a un número entero
cantidadDatos = parseInt(cantidadDatos);

// Verifica si la entrada es un número válido
if (isNaN(cantidadDatos) || cantidadDatos <= 0) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    // Arreglo para almacenar los datos ingresados
    var datos = [];

    // Pide al usuario que ingrese los datos
    for (var i = 0; i < cantidadDatos; i++) {
        var dato = prompt("Ingrese el dato #" + (i + 1) + ":");
        // Convierte la entrada del usuario a un número y lo agrega al arreglo
        datos.push(parseFloat(dato));
    }

    // Calcula el promedio de los datos
    var suma = 0;
    for (var i = 0; i < cantidadDatos; i++) {
        suma += datos[i];
    }
    var promedio = suma / cantidadDatos;

    // Cuenta cuántos datos son mayores que el promedio
    var contador = 0;
    for (var i = 0; i < cantidadDatos; i++) {
        if (datos[i] > promedio) {
            contador++;
        }
    }

    // Muestra el resultado
    alert("El promedio de los datos ingresados es: " + promedio.toFixed(2) + "\n" +
          "De los datos ingresados, " + contador + " son mayores que el promedio.");
}
