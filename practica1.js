function esCorreoElectronico(cadena) {
    if (cadena.includes("@")) {
        if (cadena.endsWith(".com") || cadena.endsWith(".com.mx") || cadena.endsWith(".mx")) {
            return true; 
        } else {
            return false; 
        }
    } else {
        return false; 
    }
}

var inputUsuario = prompt("Ingrese una cadena de texto para verificar si es un correo electrónico:");

if (esCorreoElectronico(inputUsuario)) {
    console.log("La cadena ingresada es un correo electrónico válido.");
} else {
    console.log("La cadena ingresada NO es un correo electrónico válido.");
}
