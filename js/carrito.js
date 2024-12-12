// configuracion de productos con stock y dctos
function cargarCarrito() {
  //  console.log(prods);
}
const productos = JSON.parse(localStorage.getItem("productos"));
console.log(productos);

let divProds = document.getElementById("productos");

for (let i = 0; i < productos.length; i++) {
  let unDiv = document.createElement("div");
  unDiv.classList.add("prod-carr");

  let sName = document.createElement("span");
  sName.classList.add("prod-name");
  sName.innerHTML = productos[i].name.toUpperCase();

  let sStock = document.createElement("span");
  sStock.classList.add("prod-stock");
  sStock.innerHTML = "stock: " + productos[i].amount;

  let btn = document.createElement("button");
  btn.classList.add("prod-btn");
  btn.textContent = "AGREGAR";

  btn.onclick = () => agregarAlCarrito();
  unDiv.appendChild(sName);
  unDiv.appendChild(sStock);
  unDiv.appendChild(btn);

  divProds.appendChild(unDiv);
}
/*
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
*/

const IVA = 0.21;

document.addEventListener("DOMContentLoaded", cargarCarrito);

function agregarCarrito(nombre, precio, productoKey) {
  const producto = productos[productoKey];

  if (producto.stock <= 0) {
    alert("Sin stock");
    return;
  }

  // obtener la info del carrito del LS
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // agregar nuevo producto
  carrito.push({
    nombre: producto.nombre,
    precio: producto.precio,
    productoKey: productoKey,
  });

  // reducir stock
  producto.stock--;
  document.getElementById(`stock-${productoKey}`).textContent = producto.stock;

  // Guardar en LS
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // actualizar la vista
  renderizarCarrito(); // ???
}
