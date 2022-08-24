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

edad > 18 ? Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Podes ingresar a la pagina',
    showConfirmButton: false,
    timer: 1500
  }) : alert("no podes pasar");




let carrito = [];
let productos = [];

let gestor; /* variable vacia para despues aplicarla en el new ((clase)) */


gestor = new GestionarProductos();
gestor.iniciar();

function aniadirCarrito(id) {
    const prod = document.querySelector('#row_' + id); /* aplico al div row. llamo al obj id */
    let producto = new Stock(id,
        prod.querySelector('h3').textContent,
        prod.querySelector('p').textContent,
        prod.querySelector('.precio').textContent,
        /* llamo h3*/
        /* llamo precio */
    )

    gestor.addCart(producto); /* aplico la funcion addcart llamando al elemento producto */
}

gestor.cargarProductos(productos);
/* AGREGO ESTO PARA QUE FINAAAALMENTE SE MUESTREN
 */