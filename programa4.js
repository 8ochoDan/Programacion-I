function esSudokuCorrecto(sudoku) {
    // Verificar filas y columnas
    for (let i = 0; i < 9; i++) {
        if (!esConjuntoCorrecto(sudoku[i]) || !esConjuntoCorrecto(sudoku.map(fila => fila[i]))) {
            return false;
        }
    }

    // Verificar regiones
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!esConjuntoCorrecto(obtenerRegion(sudoku, i, j))) {
                return false;
            }
        }
    }

    // Si pasa todas las verificaciones, la solución es correcta
    return true;
}

function esConjuntoCorrecto(conjunto) {
    // Verificar si el conjunto contiene todos los números del 1 al 9 sin repetición
    return new Set(conjunto).size === 9 && conjunto.every(numero => numero >= 1 && numero <= 9);
}

function obtenerRegion(sudoku, filaInicio, columnaInicio) {
    let region = [];
    for (let i = filaInicio; i < filaInicio + 3; i++) {
        for (let j = columnaInicio; j < columnaInicio + 3; j++) {
            region.push(sudoku[i][j]);
        }
    }
    return region;
}

// Función para imprimir el sudoku en la consola
function imprimirSudoku(sudoku) {
    for (let i = 0; i < 9; i++) {
        console.log(sudoku[i].join(' '));
    }
}

// Función para ingresar el sudoku desde la consola
function ingresarSudokuDesdeConsola() {
    let sudoku = [];
    console.log("Ingresa cada fila del sudoku separada por espacios. Utiliza '0' para los espacios en blanco.");

    for (let i = 0; i < 9; i++) {
        let fila = prompt(`Ingresa la fila #${i + 1}:`).split(' ').map(Number);
        sudoku.push(fila);
    }

    return sudoku;
}

// Ejemplo de uso
console.log("Ingresa el sudoku (utiliza '0' para los espacios en blanco):");
const sudokuIngresado = ingresarSudokuDesdeConsola();
console.log("\nSudoku Ingresado:");
imprimirSudoku(sudokuIngresado);

if (esSudokuCorrecto(sudokuIngresado)) {
    console.log("\n¡El sudoku ingresado es correcto!");
} else {
    console.log("\n¡El sudoku ingresado es incorrecto!");
}
