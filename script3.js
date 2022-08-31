class GestionarProductos {

    iniciar() {
        /* metodo para iniciar */
        fetch( link )

        .then( respuesta => respuesta.json())
        .then( resultado => {

            productos     = resultado.productos;

        let productosDestacados = productos

        this.cargarProductos(productosDestacados);


        
    })  
this.mostrarTodo()
        this.actualizarCarrito()
        this.realizarCuenta()
    }




    cargarProductos(productos) {
        const divProductos = document.querySelector('#productos');
        divProductos.innerHTML = '';

        productos.forEach((producto) => {

            let prodPag = document.createElement('div');
            prodPag.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
            prodPag.setAttribute("id", "row_" + producto.id);
            prodPag.innerHTML = `      <div class="w-20">
<img src="${producto.img}" alt="" class="imagensitaPc ${producto.id}'"><img>
</div>

<div class="p-3 d-flex flex-column w-60 h-150">
<h3>${ producto.nombre}</h3>                                            
<p>${producto.descripcion}</p>
</div>

<div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
<p class="precio">$${producto.precio}</p>
<a href="javascript:aniadirCarrito(${producto.id})" button class="custom-btn btn-7"><span>Comprar</span></a>
</div>`;
            divProductos.appendChild(prodPag);
        })

    }

    storage() {

        localStorage.setItem('carrito', JSON.stringify(carrito));

    }

    /* para recorrer los productos y que lo muestre en el carrito */
    addCart(infoProducto) {


        const estaDisponible = carrito.some(producto => producto.id === infoProducto.id);

        if (estaDisponible) {
            const articulos = carrito.map(producto => {

                if (producto.id === infoProducto.id) {

                    producto.stock++;

                    return producto;

                } else {

                    return producto;

                }


            })

            Toastify({
                text: "Agregado nuevamente",
                duration: 2000,
                gravity: 'bottom',
                color: 'white'

            }).showToast();

        } else {
            carrito.push(infoProducto);
            Swal.fire({
                title: 'Agregado al carrito',
                width: 600,
                padding: '3em',
                color: 'black',
                background: '#fff url(https://c.tenor.com/JJ4J3TNZWAgAAAAj/color.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://c.tenor.com/2IvxDIodyJwAAAAj/buy-buy-buy-trading.gif")
                  left top
                  no-repeat
                `
              })
        }
        this.actualizarCarrito();

    }


    mostrarTodo() {
        let descripcionCarrito = document.querySelector("#clickBox");
        descripcionCarrito.innerHTML = "";
        let total = 0;
        carrito.forEach((producto) => {

            const fila = document.createElement('div');
            fila.classList.add(".divinner");
            total += parseInt(producto.precio);
            fila.innerHTML = `<div class="divinner">

            
            <img src=${producto.img} width="80">
            </img>

        <div class="parrafos">
            ${producto.nombre}


             Precio:${producto.precio}

<div class="enRojo">
            Añadidos: ${producto.stock}
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                            <a href="javascript:eliminar(${producto.id})">
                            <i class="fa-solid fa-trash" id="botonEliminar"></i>
                            </a>
                        </div>
</div>
        </div>`;

            descripcionCarrito.appendChild(fila);
        })

        let row = document.createElement('div');
        row.classList.add(".divinner");
        
        row.innerHTML = `   
                        <div class="totalPagar">
                            Total a pagar:
                        

                            <b>$ ${total}</b>
                        </div>`;

        descripcionCarrito.appendChild(row);
    }

    /* contar productos */
    contarCarrito() {

        let contadorProductos = 0;

        carrito.forEach((producto) => {

            contadorProductos = contadorProductos + parseInt(producto.stock);
        })

        return contadorProductos;
    }
    /* aplicar en el if y else para que las 2 funciones se ejecuten */
    actualizarCarrito() {


        this.realizarCuenta();

        this.mostrarTodo();

        this.storage();


    }

    /* actualiza el contador en el carrito */
    realizarCuenta() {

        let totalArticulos = this.contarCarrito();

        let countCarrito = document.querySelector("#carritoCarrito");

        countCarrito.innerHTML = totalArticulos;

    }


/* eliminar producto del carrito */
    eliminarArticulo(id) { 

        carrito = carrito.filter(producto => producto.id != id);
        this.actualizarCarrito();
            
    }
    
}

/* -------------------- */

