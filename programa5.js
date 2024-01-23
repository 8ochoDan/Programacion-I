function esCuadradoMagico(matriz) {

    if (matriz.length !== 3 || matriz.some(fila => fila.length !== 3)) {
        return false;
    }


    const sumaMagica = matriz[0].reduce((suma, valor) => suma + valor, 0);

   
    for (let i = 0; i < 3; i++) {
        if (matriz[i].reduce((suma, valor) => suma + valor, 0) !== sumaMagica ||
            matriz.reduce((suma, fila) => suma + fila[i], 0) !== sumaMagica) {
            return false;
        }
    }

    if (matriz[0][0] + matriz[1][1] + matriz[2][2] !== sumaMagica ||
        matriz[0][2] + matriz[1][1] + matriz[2][0] !== sumaMagica) {
        return false;
    }

    return true;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function ingresarMatrizDesdeConsola() {
    let matriz = [];
    console.log("Ingresa cada fila de la matriz separada por espacios:");

    for (let i = 0; i < 3; i++) {
        let fila = prompt(`Ingresa la fila #${i + 1}:`).split(' ').map(Number);
        matriz.push(fila);
    }

    return matriz;
}

console.log("Ingresa el cuadrado mágico (matriz de 3x3):");
const cuadradoMagicoIngresado = ingresarMatrizDesdeConsola();
console.log("\nCuadrado Mágico Ingresado:");
imprimirMatriz(cuadradoMagicoIngresado);

if (esCuadradoMagico(cuadradoMagicoIngresado)) {
    console.log("\n¡El cuadrado mágico ingresado es válido!");
} else {
    console.log("\n¡El cuadrado mágico ingresado no es válido!");
}
