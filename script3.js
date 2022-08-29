class GestionarProductos{
    iniciar /* metodo para iniciar */(){


fetch(link)

.then(respuesta => respuesta.json())
.then(resultado =>{

    productos = resultado.productos;

    this.cargarProductos(productos);
    this.mostrarTodo();
})

    
        
    
    
    this.actualizarCarrito();
}


storage(){ 
       
    localStorage.setItem("carritos",JSON.stringify(carrito));
/* ----HACER ESTO TAMBIEN------ */
}



    cargarProductos( productos ) {
        const divProductos    = document.querySelector('#productos'); 
        divProductos.innerHTML = ''; 

productos.forEach((producto) =>{  

let prodPag = document.createElement('div'); 
prodPag.classList.add('contenedorDiv', 'producto');
prodPag.setAttribute("id","row_"+producto.id);
prodPag.innerHTML = `
<img src="${producto.img}" alt="" class="imagensitaPc"><img>

<div class="p-3 d-flex flex-column w-60 h-150">
<h3 class="h3productos">${ producto.nombre}</h3>                                            
<p>${producto.descripcion}</p>
</div>

<div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
<p class="precio">$${producto.precio}</p>
<a href="javascript:aniadirCarrito(${producto.id})" <button class="custom-btn btn-7">COMPRAR</button></a>
</div>`; 
divProductos.appendChild(prodPag);
})

}

/* para recorrer los productos y que lo muestre en el carrito */
 addCart (infoProducto) { 


    const estaDisponible = carrito.some(producto => producto.id === infoProducto.id); 

     if(estaDisponible){
        const articulos = carrito.map( producto => {

            if(producto.id === infoProducto.id){

                producto.stock++;

                return producto;
                
            }
            
            else{

                return producto;

            }
      

        })
                
        alert("Agregado nuevamente");
    
     }else{
        carrito.push(infoProducto);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          }); 
    }
    this.actualizarCarrito();

}


mostrarTodo(){  
    let descripcionCarrito = document.querySelector("#clickBox"); 
    descripcionCarrito.innerHTML = ""; 

    carrito.forEach((producto) =>{ 
        
        const fila = document.createElement('div');
        fila.classList.add(".divinner");
        fila.innerHTML = `<div class="contenedorCarrito">
        <div class="divinner">
        <img src="./alienware.jpg" alt="" class="imagensitaPc"><img>
          
        <div class="parrafos">
        <h3>${producto.nombre}</h3> 
                                    <p>${producto.descripcion}</p>
                                    <p class="precio">${producto.precio}</p>
                                </div>
                                </div>
                                </div>`;

                                descripcionCarrito.appendChild(fila);
})             
} 

/* contar productos */
contarCarrito(){

    let contadorProductos = 0;

    carrito.forEach((producto) => {

        contadorProductos = contadorProductos + parseInt(producto.stock);
    })

    return contadorProductos;
}
/* aplicar en el if y else para que las 2 funciones se ejecuten */
actualizarCarrito(){

        
    this.realizarCuenta();

    
    this.mostrarTodo();

    
    this.storage();
    
}

/* actualiza el contador en el carrito */
realizarCuenta(){ 

    let totalArticulos = this.contarCarrito();

    let countCarrito = document.querySelector("#carritoCarrito");

    countCarrito.innerHTML = totalArticulos;

}


}