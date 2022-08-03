/* function constructora */
class Productos { 
    constructor(tipo,precio,color){
    this.tipo = tipo;
    this.precio = precio;
    this.color = color;
}
mostrarTodo(){
    return this.tipo + " $ "+ this.precio ; 
}
mostrarPrecios(){
    return "$" + this.precio;
}
mostrarColores(){
    return this.tipo + ": " + this.color;
}
}

/*const arrayProductos = ["Lavarropas", "Playstation 5", "Pc Alienware"];
const agregarProductos = arrayProductos.push("Heladera", "cocina", "xbox");
arrayProductos.push("sesese")  utilizando soloo push */

let ProductosElectronica = []; /* APLICANDO ARRAYS!! */
ProductosElectronica.push(new Productos("Pc Alienware",100000,"Metalica"));
ProductosElectronica.push(new Productos("Lavarropas Drean",70000,"Blanco"));
ProductosElectronica.push(new Productos("Heladera Whirlpool",70000,"Negro"));

let respuesta = prompt("Que deseas saber de los productos? \n 1)Que productos hay? \n 2)Quiero saber el precio de los 3 \n 3)De que color son?");


if(respuesta == "1"){
    alert("los precios son " + mostrarProductos());

}else if(respuesta == "2"){
    alert("la suma de los 3 precios es" + mostrarSoloPrecios())
}else if(respuesta == "3"){
    alert("Los colores del stock actual son" + mostrarColor())

}else{
    alert("Coloque un precio")
}

let confirmar = prompt("deseas comprar algo? si quiere solo escriba 'si'")

if(confirmar == "si"){
prompt("Que producto deseas comprar?")
}else{
    alert("Elija una opcion")
}

let todoStock = prompt("1)Pc Alienware \n 2)Lavarropas Drean \n 3)Heladera Whirlpool")
if(todoStock == "1"){
    alert("Perfecto! Pc AlienWare, te lo estamos llevando a tu casa ya mismo")
}else if(todoStock == "2"){
        alert("Perfecto! Lavarropas Drean, te lo estamos llevando a tu casa ya mismo")
}else if(todoStock == "3"){
            alert("Perfecto! Heladera Whirlpool, te lo estamos llevando a tu casa ya mismo")
}else{
    alert("Elija una opcion")
}



/* UNICA FORMA DE MOMENTO QUE VOY A UTILIZAR PARA RECORRER UN ARRAY */
  function mostrarProductos(){
let stock = "";
for(let i = 0; i < ProductosElectronica.length // para que recorra siempre tiene que haber un length 
    ;i++){
    stock += "\n"+ProductosElectronica[i].mostrarTodo();
}
return stock ; 
} 

function mostrarSoloPrecios(){
    let precios = "";
    for (let i = 0; i < ProductosElectronica.length;i++){
        precios += "\n"+ProductosElectronica[i].mostrarPrecios();
    }
return precios;
}

function mostrarColor(){
    let color = "";
    for (let i = 0; i < ProductosElectronica.length;i++){
        color += "\n" + ProductosElectronica[i].mostrarColores();
    }
    return color;
}


/* UTILIZANDO DOM */

/* PUEDO CAMBIAR DE COLOR EL H1 */

/* TENGO QUE USAR TEXTCONTENT PARA CAMBIAR, SINO NO ME DEJA*/
const saludito = prompt("Como te llamas?");
document.querySelector('.achedos').textContent = "Estamos muy contentos de que estes aqui  " + saludito;


