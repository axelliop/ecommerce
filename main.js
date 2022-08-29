let carrito = [];
let productos = [];
let totalCarrito; /* variable vacia para despues aplicarla en el new ((clase)) */

const link = './productosjson.json';


const saludito = prompt("Como querrias que te llamemos?");
document.querySelector('.achedos').textContent = "Estamos muy contentos de que estes aqui  " + saludito;


document.addEventListener('DOMContentLoaded',() =>{

    carrito = JSON.parse(localStorage.getItem('carritos'))


})

totalCarrito = new GestionarProductos();
totalCarrito.iniciar();

function aniadirCarrito(id) {
    const prod = document.querySelector('#row_' + id); /* aplico al div row. llamo al obj id */
    let producto = new Stock(id,
        prod.querySelector('h3').textContent,
        prod.querySelector('p').textContent,
        prod.querySelector('.precio').textContent,
        /* llamo h3*/
        /* llamo precio */
    )

    totalCarrito.addCart(producto); /* aplico la funcion addcart llamando al elemento producto */
    
totalCarrito.cargarProductos(productos);
}

/* AGREGO ESTO PARA QUE FINAAAALMENTE SE MUESTREN
 */