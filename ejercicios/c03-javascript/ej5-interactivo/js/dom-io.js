const arbolFormulario = document.querySelector('#arbol-form')
const arbolInput = document.querySelector('#arbol-input');
const resultadoFinal = document.querySelector('#arbol-result');

arbolFormulario.addEventListener
('submit', (arbolEvent) => 
    {
        event.preventDefault(); //Evitar un refresh de la pagina
        let numeroArbol = arbolInput.value; //Recuperar el valor del <input>

        if (numeroArbol < 0) {
            resultadoFinal.textContent = "Ingrese un número positivo!";
        } else if (numeroArbol === 0) {
            resultadoFinal.textContent = ""
        } else {
            resultadoFinal.textContent = '';
            for (let i = 1; i <= numeroArbol; i++) {
                resultadoFinal.textContent += `${'*'.repeat(i)} \n`;
            }
        }
        console.log(`Tu arbol tiene una altura de ${arbolInput.value}!`);
    }
);