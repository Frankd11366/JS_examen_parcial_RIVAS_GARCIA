
        function agregarProducto() {
            var producto = document.getElementById('producto').value;
            var precio = document.getElementById('precio').value;

            if (producto.trim() === '' || precio.trim() === '') {
                alert('Por favor ingrese un producto y un precio.');
                return;
            }

            var nuevoProducto = document.createElement('li');
            nuevoProducto.textContent = `${producto}: Q${precio}`;

            var listaProductos = document.getElementById('lista-productos');
            listaProductos.appendChild(nuevoProducto);

            document.getElementById('producto').value = '';
            document.getElementById('precio').value = '';

        }
























const form = document.querySelector('form')
const alerta = document.getElementById('alerta')

const enviarDatos = (event) => {
    event.preventDefault();
    form.addEventListener('submit', enviarDatos)



}

// form.addEventListener('submit', enviarDatos)
// const enviarDatos = (event) => {
//     event.preventDefault();
//     alerta.textContent = ''
//     if (form.producto.value == '' || form.precio.value == '') {
//         form.producto.focus()
//         alerta.textContent = "Debe llenar todos los datos"
//     } else {
//         form.submit();
//     }


// }