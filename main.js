let carrito = [];
let productos = [];

let gestor; /* variable vacia para despues aplicarla en el new ((clase)) */
const link = './productosjson.json';



document.addEventListener('DOMContentLoaded', () => {

    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    gestor = new GestionarProductos();
    gestor.iniciar();

})

function aniadirCarrito(id) {
    const prod = document.querySelector('#row_' + id); /* aplico al div row. llamo al obj id */
    let producto = new Stock(id,
        prod.querySelector('h3').textContent,
        prod.querySelector('p').textContent,
        prod.querySelector('.precio').textContent,
     
    )

    gestor.addCart(producto); 
}

/* eliminar productos */
function eliminar(id) {   
    gestor.eliminarArticulo(id);
}