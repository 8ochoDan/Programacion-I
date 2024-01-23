let numcomp = prompt ("Cuantos numeros deseas leer:");
let i=0;
let num;
let cont=0;
let ejem = prompt ("Introduce el numero a evaluar:");
while (i < numcomp) {
    num = prompt ("Introduce el numero #"+ (i + 1) +":");
        if (num > ejem) {
            cont ++;
        }
        i ++;
}
console.log("Hay ",cont, " numeros mayoes a ",ejem);