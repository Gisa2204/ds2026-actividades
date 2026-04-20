const compraForm = document.querySelector('#compra-form');
const compraInput = document.querySelector('#compra-input');
const compraList = document.querySelector('#compra-list');
const contadorItems = document.querySelector('#contador-items');

let cantidad_items = 0;

compraForm.addEventListener
('submit', (compraEvent) => 
    {
        compraEvent.preventDefault(); //Evitar refresh de la pagina

        compra = compraInput.value.trim();
        if (compra === "") return; //No funcionar si se hace un input vacio

        //Crear el <li> del item
        const itemCompra = document.createElement('li');

        //Crear el texto que el <li> contendrá
        const textoCompra = document.createElement('span');
        textoCompra.textContent = compra;

        //Crear el botón de eliminar que el <li> contendrá
        const eliminarCompraBtn = document.createElement('button');
        eliminarCompraBtn.textContent = 'ELIMINAR';
        eliminarCompraBtn.className = 'delete-btn';
        
        eliminarCompraBtn.addEventListener
        ('click', (borrarItem) => 
            { 
                //Borrar toda la <li>
                itemCompra.remove();

                //Actualizar el contador
                cantidad_items--;
                contadorItems.textContent = cantidad_items;
            }
    
        ); //Eliminar todo el <li>

        //Juntar todo en una box
        itemCompra.appendChild(textoCompra);
        itemCompra.appendChild(eliminarCompraBtn);
        compraList.appendChild(itemCompra);

        //Sumar 1 al contador de items y mostarlo
        cantidad_items++;
        contadorItems.textContent = cantidad_items;

        //Para limpiar el input y dejarlo escribiendo
        compraInput.value = "";
        compraInput.focus();
    }
);