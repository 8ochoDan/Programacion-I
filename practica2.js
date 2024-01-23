function mostrarPotenciasFraccionales(numFilas) {
    console.log("Potencia\tFracción\tDecimal");
    let potencia = 1;
    let fraccion = 1;
    for (let i = 1; i <= numFilas; i++) {
        console.log(`${i}\t\t1/${potencia}\t\t${fraccion.toFixed(5)}`);
        potencia *= 2;
        fraccion /= 2;
    }
}

const numFilas = 7;

mostrarPotenciasFraccionales(numFilas);
