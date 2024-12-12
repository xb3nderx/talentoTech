// configuracion de productos con stock y dctos
const productos = {
laptop: {
    nombre: 'Laptop',
    precio: 800,
    stock: 10,
    descuento: 0.1 
},
smartphone: {
    nombre: 'Smartphone',
    precio: 500,
    stock: 15,
    descuento: 0.05 
},
tablet: {
    nombre: 'Tablet',
    precio: 300,
    stock: 8,
    descuento: 0
},
}

const IVA = 0.21

document.addEventListener('DOMContentLoaded', cargarCarrito)

function agregarCarrito(nombre, precio, productoKey) {
    const producto = productos[productoKey]

    if(producto.stock <=0) {
        alert('Sin stock')
        return
    }

    // obtener la info del carrito del LS
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    // agregar nuevo producto
    carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        productoKey: productoKey
    })

    // reducir stock
    producto.stock--
    document.getElementById(`stock-${productoKey}`).textContent = producto.stock

    // Guardar en LS
    localStorage.setItem('carrito',JSON.stringify(carrito))

    // actualizar la vista
    renderizarCarrito()  // ???

}

