function pedirNombresEquipos() {
    let equipos = [];
    for (let i = 1; i <= 8; i++) {
        let nombreEquipo = prompt(`Ingrese el nombre del equipo #${i}:`);
        equipos.push(nombreEquipo);
    }
    return equipos;
}

function simularPartido(equipo1, equipo2) {
    return equipo1.length > equipo2.length ? equipo1 : equipo2;
}
function simularCampeonato() {
    let equipos = pedirNombresEquipos();

    while (equipos.length > 1) {
        let ganadores = [];
        for (let i = 0; i < equipos.length; i += 2) {
            let equipo1 = equipos[i];
            let equipo2 = equipos[i + 1];
            let ganador = simularPartido(equipo1, equipo2);
            ganadores.push(ganador);
            console.log(`Ganador del partido ${equipo1} vs ${equipo2}: ${ganador}`);
        }

        equipos = ganadores;
        console.log("\nAvanzan a la siguiente ronda:\n", equipos.join(", "), "\n");
    }

    console.log(`¡El campeón del torneo es: ${equipos[0]}!`);
}
simularCampeonato();
