class GestionarProductos {

    iniciar() {
        /* metodo para iniciar */
        fetch( link )

        .then( respuesta => respuesta.json())
        .then( resultado => {

            productos     = resultado.productos;

                    // Solo quiero mostrar los articulos destacados.
        let productosDestacados = productos

        this.cargarProductos(productosDestacados);


        
    })  

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
<img src="${producto.img}" alt="" class="imagensitaPc"><img>
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

            alert("Agregado nuevamente");

        } else {
            carrito.push(infoProducto);
            alert("lo compraste")
        }
        this.actualizarCarrito();

    }


    mostrarTodo() {
        let descripcionCarrito = document.querySelector("#clickBox");
        descripcionCarrito.innerHTML = "";

        carrito.forEach((producto) => {

            const fila = document.createElement('div');
            fila.classList.add(".divinner");
            fila.innerHTML = `<div class="divinner">
        <img src="./alienware.jpg" alt="" class="imagensitaPc"><img>
        </div>
        <div class="parrafos">
                                    <h3>${producto.nombre}</h3>                                            
                                    <p>${producto.descripcion}</p>
                                    <p class="precio">${producto.precio}</p>
                                </div>`;

            descripcionCarrito.appendChild(fila);
        })
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


}