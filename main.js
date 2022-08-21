
const saludito = prompt("Como querrias que te llamemos?");
document.querySelector('.achedos').textContent = "Estamos muy contentos de que estes aqui  " + saludito;

let registrado = prompt("ya estas registrado? si no lo estas, escribe 'no'");
if (registrado == "no") {

    let buenas = "bienvenido " + prompt("Como es tu nombre?");

    localStorage.setItem("lista", JSON.stringify(buenas)); /* "lista" es una key a llamar en getelement, esto guarda la respuesta del prompt de arriba */


} else {
    alert(localStorage.getItem("lista"))
}

let edad = prompt("cuantos años tenes?");

edad > 18 ? alert("podes pasar") : alert("no podes pasar");




let carrito = [];
let productos = [];

let gestor; /* variable vacia para despues aplicarla en el new ((clase)) */


gestor = new GestionarProductos();
gestor.iniciar();

function aniadirCarrito(id) {
    const prod = document.querySelector('#row_'+id);/* aplico al div row. llamo al obj id */
    let producto =  new ProductosUno (id, 
                                    prod.querySelector('h3').textContent, /* llamo h3*/
                                    prod.querySelector('.precio').textContent, /* llamo precio */
                                    prod.querySelector('img').src/* llamo img para el aniadido */
                                    )

                                    gestor.addCart(producto); /* aplico la funcion addcart llamando al elemento producto */
}

gestor.cargarProductos( productos );/* AGREGO ESTO PARA QUE FINAAAALMENTE SE MUESTREN
 */