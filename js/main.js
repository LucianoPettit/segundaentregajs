
function totalCarrito(arr){
    let resultado = 0;
    arr.forEach( producto => {
        resultado += producto.precio * producto.cantidad
        
    })
    return resultado;
}

function actualizarStock(id, cantidad) {
    const producto = listaProductos.find(producto => producto.id == id);
    producto.stock -= cantidad;
}

const carritoCompra = []
const listaProductos = [ 
                        { id: 1, nombre: "VOOPOO DRAG 3 TPP-X", precio: 39000, cantidad: 0, stock: 10},
                        { id: 2, nombre: "VAPORESSO TARGET 200", precio: 27000, cantidad: 0, stock: 0 },
                        { id: 3, nombre: "VAPORESSO  GEN 160", precio: 23000, cantidad: 0, stock: 5 },
                        { id: 4, nombre: "VAPORESSO GEN 200", precio: 29000, cantidad: 0, stock: 13 },
                        { id: 5, nombre: "VAPORESSO SKY SOLO PLUS", precio: 14000, cantidad: 0, stock: 1 },
                    ]
 
let mostrarProductos = ""

listaProductos.forEach( producto => {

    mostrarProductos += +producto.id +" producto: "+ producto.nombre +" precio: $"+ producto.precio+"\n"

} )

alert ("Bienvenido, para poder continuar con la compra porfavor seleccione la opción del producto que desea comprar" );

alert(mostrarProductos)

let seguirComprando = true;

while(seguirComprando){

    let id = prompt("Ingrese la ID del producto que desea adquirir:")
    
    if( !isNaN(id) ){
        
        const producto = listaProductos.find( producto => producto.id == id)

        if(producto && producto.stock > 0){
            let cantidad = prompt("Cuantos productos quieres adquirir?")
            
            if(cantidad <= producto.stock){
                producto.cantidad = cantidad;
                carritoCompra.push(producto);
                actualizarStock(id, cantidad);
            } else {
                alert("Lo sentimos, no hay suficiente stock de ese producto.")
            }
        } else {
            alert("El ID ingresado no es valido o el producto seleccionado no tiene stock disponible. Vuelve a intentarlo nuevamente.")
        }
    }

    seguirComprando = prompt("Desea seguir comprando? (si / no)").toLowerCase() === "si";
}

alert( "El total de su compra fue de: $"+ totalCarrito(carritoCompra))

