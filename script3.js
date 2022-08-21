class GestionarProductos{
    iniciar /* metodo para iniciar */(){
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

}

    cargarProductos( productos ) { /* me llama al array productos */
        
        const divProductos    = document.querySelector('#productos'); /* llamo al div productos */
        divProductos.innerHTML = ''; /* ME RESETEA ALGO QUE NO QUIERA QUE APAREZCA EN EL INNER */

productos.forEach((producto) =>{  /* recorro el array productos y le agrego un elemento productos */

let prodPag = document.createElement('div'); 
prodPag.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
prodPag.setAttribute("id","row_"+producto.id);/* settatribute para identificarlo, propiedad id y row para identificarlo, agarrando el dato id para identificar el producto uno por uno */

prodPag.innerHTML = `      <div class="w-20">
<img src="${producto.img}" alt="" class="imagensitaPc"><img>
</div>

<div class="p-3 d-flex flex-column w-60 h-150">
<h3>${ producto.nombre}</h3>                                            
<p>${producto.descripcion}</p>
</div>

<div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
<p class="precio">$${producto.precio}</p>
<a href="javascript:aniadirCarrito(${producto.id})" class="btn btn-primary">Agregar al carrito</a>
</div>`; /* CON HREF Y ONCLICK PUEDO LLAMAR FUNCIONES DE AFUERA */
                            
divProductos.appendChild(prodPag);
})

}

 addCart (infoProducto) { /* infoproducto es el elemento, tooda esta funcion es para recorrer el array de los productos que agregue al carrito */

 //carrito.some, tambien va a recorrer al elemento producto, de productos.forEach(producto) linea 37
    const estaDisponible = carrito.some(producto => producto.id === infoProducto.id); 
     /* funcion flecha, busco la propiedad id del producto, y si infoproducto cumple con lo mismo, some me devuelve un TRUE  */ /* tambien llame al array en 0 con carrito, some sirve para devolver TRUE O FALSE */
     if(estaDisponible){
        
        
     }else{
        carrito.push(infoProducto);
        alert("LO COMPRASTE EXITOSAMENTEEE"); /* la coleccion vacia, la pusheo */
    }

    this.mostrarTodo();

}

//con esta funcion recorro lo que agrego al carrito y demas
mostrarTodo(){  /* funcion para mostrar lo que agrego al carrito (offcanva) */ 
    let descripcionCarrito = document.querySelector("#clickBox"); /* llamo al div */
    descripcionCarrito.innerHTML = ""; //reseteo el  inner

    carrito.forEach((producto) =>{ /* cada vez que sse apreta el boton de carrito, llama a carrito.some , en caso de no existir pushea el objeto al carrito*/
        
        const fila = document.createElement('div');
        fila.classList.add(".divinner");
        fila.innerHTML = `<div class="divinner">
        <img src="./alienware.jpg" alt="" class="imagensitaPc"><img>
        </div>
        <div class="parrafos">
                                    <h3>${producto.nombre}</h3>                                            
                                    <p>Felicidades! lo compraste</p>
                                </div>`;

                                descripcionCarrito.appendChild(fila);
})             
} 



}