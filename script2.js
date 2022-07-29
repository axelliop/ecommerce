/*  const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const  iva =  x => x * 0.21;
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)/* sobre todo esto, hacer el descuento */

/* alert(nuevoPrecio); /* el ultimo valor que hice */

/* VOY A USAR CLASS CONSTRUCTOR!!! */
class Productos {
    constructor (descripcion,precio,tipo){

        this.descripcion = descripcion;
        this.precio = precio;
        this.tipo = tipo; /* siempre siempre agregar el THIS. */
    }


mostrarDescripcion(){
    return this.descripcion + " $ " + this.precio ; 
}

}/* todo lo cierra la class constructor */

let ProductosElectronica = new Array(); /* APLICANDO ARRAYS!! */
ProductosElectronica.push(new Productos("Pc Alienware",100000,"Metalica"));
ProductosElectronica.push(new Productos("Lavarropas Drean",70000,"Blanco"));
ProductosElectronica.push(new Productos("Heladera Whirlpool",70000,"Negro"));/* el array, se usa dentro de los NEW en este caso */
 /* ACA VOY CREANDO O AGREGANDO PRECIOS, EN UN PROMPT ACTO SEGUIDO, ESTO APLICA DENTRO DE LA FUNCION CONSTRUCTORA, LO QUE ESTA ADENTRO DEL PARENTESIS, DESCRIPCION, PRECIO Y TIPO */
let respuesta = prompt("Que querrias hacer? \n 1) Ver la variedad de productos");

if (respuesta == "1"){
    //alert("los productos son "+ProductosElectronica.join("\n")); /* CON JOIN VA A POENR SOLO LOS PRODUCTOS Q ESTAN ADENTROS DEL NEW ARRAY, MAS NO LOS DEL PUSH */
    alert("Los autos son: "+mostrarStock())
}



function mostrarStock(){
    let stock = "";
    for (let i = 0 ; i < ProductosElectronica.length;i++){ /* APLICO ESTA FUNCTION PARA RECORRER TODO EL CONSTRUCTOR DE PRODUCTOSELECTRONICA */

    stock += "\n"+ProductosElectronica[i].mostrarDescripcion(); /* la [i] es del valor de i */
}

return stock; /* para que me devuelva el valor de stock */
}

/* SALTO DE LINEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */


function valorSeis(valorPcgamer, seisCuotas) /* aca agarre 2 let */{
return valorPcgamer / seisCuotas; // PARA QUE ME SIRVA LA ECUACION!!!
}

function valorDoce(valorPcgamer, doceCuotas) /* aca agarre 2 let */{
    return valorPcgamer / doceCuotas; // PARA QUE ME SIRVA LA ECUACION!!!
    }
    

const valorPcgamer = 100000; /* para sumar tiene que ser solo tipo numerico. no string */
let seisCuotas = 6;
let doceCuotas = 12;
let cuotas = prompt("coloque la cantidad de cuotas deseada para comprar la COMPUTADORA ALIENWARE (solo 6 o 12)");
let resultadoSeis = valorSeis(valorPcgamer, seisCuotas);
let resultadoDoce = valorDoce(valorPcgamer,doceCuotas)

if (cuotas == seisCuotas){
    let cantidadCuotas = confirm("Desea escoger 6 cuotas?")
    alert("usted ha elegido " + seisCuotas + " cuotas del producto a comprar, a un total de 6 cuotas de $" + resultadoSeis + " pesos ARGENTINOS")

} else if(cuotas == doceCuotas){
    let cantidadDoceCuotas = confirm("Desea escoger 12 cuotas?")
        alert("usted ha elegido " + doceCuotas + " cuotas del producto a comprar, a un total de 12 cuotas de $" + resultadoDoce + " pesos ARGENTINOS")
    

} else{ 
    alert("elija cuotas por favor")
}

