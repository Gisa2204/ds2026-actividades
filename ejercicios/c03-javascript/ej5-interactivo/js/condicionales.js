const clasificarNota = (nota) => {
    if (nota >= 0 && nota < 4) {
        return "Desaprobado";
    } else if (nota >= 4 && nota < 8) {
        return "Aprobado";
    } else if (nota >= 8 && nota <= 10) {
        return "Promocionado";
    } else {
        return "Nota inválida";
    }
}

const diaDeLaSemana = (numero) => {
    let dia;
    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            return "Día inválido"
    }
    if (numero === 6 || numero === 7) {
        return `${dia} (fin de semana)`;
    }
    return dia;
}

console.log(`Para nota de 2: ${clasificarNota(2)}`);
console.log(`Para nota de 7: ${clasificarNota(7)}`);
console.log(`Para nota de 8: ${clasificarNota(8)}`);
console.log(`Para nota de 11: ${clasificarNota(11)}`);

console.log(`Para día 1: ${diaDeLaSemana(1)}`);
console.log(`Para día 6: ${diaDeLaSemana(6)}`);
console.log(`Para día 7: ${diaDeLaSemana(7)}`);
console.log(`Para día 8: ${diaDeLaSemana(8)}`);