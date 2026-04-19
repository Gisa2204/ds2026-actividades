let numeros = [
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
];

let suma = 0;
let numMayor = numeros[0];
let numMenor = numeros[0];

for (let n of numeros) {
    //Sumar el array
    suma += n;

    //Buscar el mayor número
    if (n > numMayor) {
        numMayor = n;
    }

    //Buscar el menor número
    if (n < numMayor) {
        numMayor = n;
    }
}

//Calcular promedio
let promedio = suma / numeros.length;


console.log(`Suma del array: ${suma}`);
console.log(`Promedio del array: ${promedio}`);
console.log(`Mayor número del array: ${numMayor}`);
console.log(`Menor número del array: ${numMenor}`);

//----------------------------
const generarAsteriscos = (n) => {
    if (n < 0) {
        return "Parámetro inválido";
    }

    asteriscos = '';
    for (let i = 1; i <= n; i++) {
        asteriscos += '*';
    }
    return asteriscos;

}

console.log(`Asteriscos: ${generarAsteriscos(35)}`)