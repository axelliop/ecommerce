

/* function constructora */

class Productos {
    constructor(nombre, precio, color, foto) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.foto = foto;
    }
}






let coleccionProductos = []

let alertas = document.querySelector("#alertas");
let productoInfo  = document.querySelector("#productoInfo");
let botonCrear = document.querySelector("#crear");

botonCrear.addEventListener("click", () => {
    if (validarFormulario()) {

        agregarProducto();

    }
})

function validarFormulario() {
    alertas.innerHTML = "";
    let inputNombre = document.querySelector("#nombre").value; /* ME DEVUELVE LO QUE ESCRIBA EL USUARIO */
    let inputPrecio = document.querySelector("#precio").value;
    let inputColor = document.querySelector("#color").value;
    let rutaFoto = document.querySelector("#rutaFoto").value;

    let arregloMensaje = [];
    if (!inputNombre) {
        arregloMensaje.push("ingrese un nombre"); /* me pushea lo que ponga el user */
    }
    if (!inputPrecio) {
        arregloMensaje.push("Ingrese un precio");
    }
    if (!inputColor) {
        arregloMensaje.push("Ingrese un color");
    }
    if (!rutaFoto) {
        arregloMensaje.push("Ingrese la ruta de la foto");
    }
    if (arregloMensaje.length > 0) {
        /* si el push de arreglo es mayor a 0 hubo errores */

        let lista = document.createElement("ul"); /* crea un unordened list */
        lista.textContent = "no es posible cargar los datos: ";

        arregloMensaje.forEach(mensaje => {

            lista.appendChild(crearLi(mensaje));
        })

        alertas.appendChild(lista);
        return false

    } else {
        return true /* retorna true si no hay errores */
    }
}

function crearLi(mensaje) {
    let li = document.createElement("li") /* nuevamente me crea un li */
    li.textContent = mensaje; /* seteo el mensaje */
    return li; /*  */

}

function agregarProducto(){
    let nombre = document.getElementById("nombre").value; /* ME DEVUELVE LO QUE ESCRIBA EL USUARIO */
    let precio = document.getElementById("precio").value;
    let color = document.getElementById("color").value;
    let foto = document.getElementById("rutaFoto").value;

    let productoElectro = new Productos(nombre,precio,color,foto);

    coleccionProductos.push(productoElectro);
    
    generarCardProducto(productoElectro)
}

function generarCardProducto(productoElectro){
    
    let nuevoDiv = document.createElement("div");
    let nuevoH2 = document.createElement("h2");
    nuevoDiv.id ="div"+productoElectro.nombre+productoElectro.foto;
    nuevoH2.textContent = productoElectro.nombre;

    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = productoElectro.foto;


    nuevoDiv.appendChild(nuevoH2);
    nuevoDiv.appendChild(nuevaImagen);

    productoInfo.appendChild(nuevoDiv);

    let contenedor = document.getElementById("productoInfo");
 contenedor.appendChild(nuevoDiv);
 
 resetearFormu();

}

function resetearFormu(){

     document.getElementById("nombre").value = "";
     document.getElementById("precio").value = "";
     document.getElementById("color").value = "";
     document.getElementById("rutaFoto").value = "";

}



