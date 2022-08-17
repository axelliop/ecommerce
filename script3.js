
    productos = [
{
    "id": 1, 
    "nombre": "PLAYSTATION 5",
    "descripcion": "la mejor pc del mercado",
    "precio": 100000,
    "img":"alienware.jpg",
    "stock": 1
    },
    {
    "id": 2, 
    "nombre": "SMART TV",
    "descripcion": "la mejor heladdera del mercado",
    "precio": 100000,
    "img":"alienware.jpg",
    "stock": 1
    },
    {
    "id": 3, 
    "nombre": "XBOX SERIES",
    "descripcion": "el mejor lavarropas del mercado",
    "precio": 100000,
    "img":"alienware.jpg",
    "stock": 1
    }
    
    ]


productos.forEach((producto) =>{ /* recorro el array de productos */
const contenedorDiv = document.querySelector("#contenedorproductos1"); /* llamo al id del div*/
    let crearContenedor = document.createElement('div'); /* CREO el div */
    crearContenedor.innerHTML = `<div class="producto1">
    <img src="./alienware.jpg" alt="" class="imagenalien"><img>
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    </div>
    <div class="parrafos">                                
                            </div>
                            <input type="button" value="Comprar ahora" id="boton1">
                            `
                            
    contenedorDiv.appendChild(crearContenedor);
})



/* ----------------------------------------------------- */

const saludito = prompt("Como querrias que te llamemos?");
document.querySelector('.achedos').textContent = "Estamos muy contentos de que estes aqui  " + saludito;

let registrado = prompt("ya estas registrado? si no lo estas, escribe 'no'");
if (registrado == "no") {

    let buenas = "bienvenido " + prompt("Como es tu nombre?");

    localStorage.setItem("lista", JSON.stringify(buenas)); /* "lista" es una key a llamar en getelement, esto guarda la respuesta del prompt de arriba */


} else {
    alert(localStorage.getItem("lista"))
}













let boton1 = document.getElementById("boton1"); /* hago un resumen rapido para mi mismo. LLAME AL ID QUE  PERTENECE AL BOTON.  */
let crearBox = document.getElementById("crearBox"); /* CON ESTO LLAME AL APPENCHILD PARA HACER EL BOX  DE AHI ABAJO, LLAMA AL DIV VACIO QUE CREE EN EL HTML*/

boton1.addEventListener('click', crearCaja); /* CON ESTO AGREGUE EL EVENTO */

function crearCaja() {
    /* y bueno la funcion para  que cumpla toodo el evento y reducir barras  de codigo */
    let crearCajita = document.createElement('div'); /* crea el div adicional */
    crearCajita.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row'); /* llama a la clase square que es el cuadrado ese  rosado */
    crearCajita.innerHTML = `<div class="divinner">
    <img src="./alienware.jpg" alt="" class="imagensitaPc"><img>
    </div>
    <div class="parrafos">
                                <h3>PC ALIENWARE</h3>                                            
                                <p>Felicidades! lo compraste</p>
                            </div>`
    crearBox.appendChild(crearCajita); /* el appenchild para crear todo, ESTO SIGNIFICA QUE LE CREE UN BOX AL LET CREARBOX, LLAMANDO  AL LET CREARCAJITA, QUE  APLICA LO DE ARRIBA, PARA QUE ME HAGA EL NUEVO DIV VACIO  */
}



let boton2 = document.getElementById("boton2");
let crearBox2 = document.getElementById("crearBox2");

boton2.addEventListener('click', crearCaja2);

function crearCaja2() {

    let crearCajita2 = document.createElement('div');
    crearCajita2.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row');
    crearCajita2.innerHTML = `<div class="divinner">
    <img src="./alienware.jpg" alt="" class="imagensitaPc"><img>
    </div>
    <div class="parrafos">
                                <h3>Lavarropas Drean</h3>                                            
                                <p>Felicidades! lo compraste</p>
                            </div>`
    crearBox2.appendChild(crearCajita2);
}



let boton3 = document.getElementById("boton3");
let crearBox3 = document.getElementById("crearBox3");

boton3.addEventListener('click', crearCaja3);

function crearCaja3() {

    let crearCajita3 = document.createElement('div');
    crearCajita3.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row');
    crearCajita3.innerHTML = `<div class="divinner">
    <img src="./alienware.jpg" alt="" class="imagensitaPc"><img>
    </div>
    <div class="parrafos">
                                <h3>HELADERA WHIRLPOOL</h3>                                            
                                <p>Felicidades! la compraste</p>
                            </div>`
    crearBox3.appendChild(crearCajita3);
    crearCajita3.setAttribute('id', +productos)
}



/* ------------------------------------------------------------------- */