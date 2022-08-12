/* function constructora */
class Productos {
    constructor(tipo, precio, color) {
        this.tipo = tipo;
        this.precio = precio;
        this.color = color;
    }
    mostrarTodo() {
        return this.tipo + " $ " + this.precio;
    }
    mostrarPrecios() {
        return "$" + this.precio;
    }
    mostrarColores() {
        return this.tipo + ": " + this.color;
    }
}

/*const arrayProductos = ["Lavarropas", "Playstation 5", "Pc Alienware"];
const agregarProductos = arrayProductos.push("Heladera", "cocina", "xbox");
arrayProductos.push("sesese")  utilizando soloo push */

let ProductosElectronica = []; /* APLICANDO ARRAYS!! */
ProductosElectronica.push(new Productos("Pc Alienware", 100000, "Metalica"));
ProductosElectronica.push(new Productos("Lavarropas Drean", 70000, "Blanco"));
ProductosElectronica.push(new Productos("Heladera Whirlpool", 70000, "Negro"));

let respuesta = prompt("Que deseas saber de los productos? \n 1)Que productos hay? \n 2)Quiero saber el precio de los 3 \n 3)De que color son?");


if (respuesta == "1") {
    alert("los precios son " + mostrarProductos());

} else if (respuesta == "2") {
    alert("la suma de los 3 precios es" + mostrarSoloPrecios())
} else if (respuesta == "3") {
    alert("Los colores del stock actual son" + mostrarColor())

} else {
    alert("Coloque un precio")
}

let confirmar = prompt("deseas comprar algo? si quiere solo escriba 'si'")

if (confirmar == "si") {
    prompt("Que producto deseas comprar?")
} else {
    alert("Elija una opcion")
}

let todoStock = prompt("1)Pc Alienware \n 2)Lavarropas Drean \n 3)Heladera Whirlpool")
if (todoStock == "1") {
    alert("Perfecto! Pc AlienWare, te lo estamos llevando a tu casa ya mismo")
} else if (todoStock == "2") {
    alert("Perfecto! Lavarropas Drean, te lo estamos llevando a tu casa ya mismo")
} else if (todoStock == "3") {
    alert("Perfecto! Heladera Whirlpool, te lo estamos llevando a tu casa ya mismo")
} else {
    alert("Elija una opcion")
}



/* UNICA FORMA DE MOMENTO QUE VOY A UTILIZAR PARA RECORRER UN ARRAY */
function mostrarProductos() {
    let stock = "";
    for (let i = 0; i < ProductosElectronica.length // para que recorra siempre tiene que haber un length 
        ; i++) {
        stock += "\n" + ProductosElectronica[i].mostrarTodo();
    }
    return stock;
}

function mostrarSoloPrecios() {
    let precios = "";
    for (let i = 0; i < ProductosElectronica.length; i++) {
        precios += "\n" + ProductosElectronica[i].mostrarPrecios();
    }
    return precios;
}

function mostrarColor() {
    let color = "";
    for (let i = 0; i < ProductosElectronica.length; i++) {
        color += "\n" + ProductosElectronica[i].mostrarColores();
    }
    return color;
}


/* UTILIZANDO DOM */

/* PUEDO CAMBIAR DE COLOR EL H1 */

/* TENGO QUE USAR TEXTCONTENT PARA CAMBIAR, SINO NO ME DEJA*/
const saludito = prompt("Como te llamas?");
document.querySelector('.achedos').textContent = "Estamos muy contentos de que estes aqui  " + saludito;








let boton1 = document.getElementById("boton1"); /* hago un resumen rapido para mi mismo. LLAME AL ID QUE  PERTENECE AL BOTON.  */
let crearBox = document.getElementById("crearBox"); /* CON ESTO LLAME AL APPENCHILD PARA HACER EL BOX  DE AHI ABAJO, LLAMA AL DIV VACIO QUE CREE EN EL HTML*/

boton1.addEventListener('click', crearCaja); /* CON ESTO AGREGUE EL EVENTO */

function crearCaja() {
    /* y bueno la funcion para  que cumpla toodo el evento y reducir barras  de codigo */
    let crearCajita = document.createElement('div'); /* crea el div adicional */
    crearCajita.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row');   /* llama a la clase square que es el cuadrado ese  rosado */
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




