// configuracion de productos con stock y dctos

const productos = JSON.parse(localStorage.getItem("productos"));

let divProds = document.getElementById("productos");

//Renderizo los productos
for (let i = 0; i < productos.length; i++) {
  let unDiv = document.createElement("div");
  unDiv.classList.add("prod-carr");

  let sName = document.createElement("span");
  sName.classList.add("prod-name");
  sName.innerHTML = productos[i].nombre.toUpperCase();

  let sStock = document.createElement("span");
  sStock.classList.add("prod-stock");
  sStock.id = "stock-" + (i + 1);
  sStock.innerHTML = "stock: " + productos[i].stock;

  let btn = document.createElement("button");
  btn.classList.add("prod-btn");
  btn.textContent = "AGREGAR";

  btn.onclick = () => agregarCarrito(productos[i]);
  unDiv.appendChild(sName);
  unDiv.appendChild(sStock);
  unDiv.appendChild(btn);

  divProds.appendChild(unDiv);
}
const IVA = 0.21;

function agregarCarrito(producto) {
  if (producto.stock <= 0) {
    alert("Sin stock");
    return;
  }

  // obtener la info del carrito del LS o crea un array vacio si no existe
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // agregar nuevo producto
  carrito.push({
    nombre: producto.nombre,
    precio: producto.precio,
    productoID: producto.id,
  });

  // reducir stock
  producto.stock--;
  document.getElementById(`stock-${producto.id}`).textContent = producto.stock;

  // Guardar en LS
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // actualizar la vista
  renderizarCarrito(); // ???
}

function renderizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const subtotalCarrito = document.getElementById("subtotal-carrito");
  const descuentoCarrito = document.getElementById("descuento-carrito");
  const ivaCarrito = document.getElementById("iva-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Limpiar lista anterior
  listaCarrito.innerHTML = "";

  // Totales iniciales
  let subtotal = 0;
  let descuentoTotal = 0;

  // Renderizar cada producto
  carrito.forEach((producto, index) => {
    const productoInfo = productos[producto.productoID - 1];
    const li = document.createElement("li");

    // Calcular descuento individual

    const descuentoProducto = productoInfo.descuento * producto.precio;
    const precioConDescuento = producto.precio - descuentoProducto;

    li.innerHTML = `
            ${producto.nombre} - $${producto.precio} 
            ${
              productoInfo.descuento > 0
                ? `<span class="descuento">(Desc. ${(
                    productoInfo.descuento * 100
                  ).toFixed(0)}%: 
                -$${descuentoProducto.toFixed(2)})</span>`
                : ""
            }
        `;

    // Botón para eliminar producto
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(botonEliminar);
    listaCarrito.appendChild(li);

    // Sumar al subtotal y descuentos
    subtotal += producto.precio;
    descuentoTotal += descuentoProducto;
  });

  // Calcular IVA
  const ivaTotal = (subtotal - descuentoTotal) * IVA;
  const total = subtotal - descuentoTotal + ivaTotal;

  // Actualizar totales
  subtotalCarrito.textContent = subtotal.toFixed(2);
  descuentoCarrito.textContent = descuentoTotal.toFixed(2);
  ivaCarrito.textContent = ivaTotal.toFixed(2);
  totalCarrito.textContent = total.toFixed(2);
}
function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Recuperar el producto para devolver stock
  const producto = productos[carrito[index].productoID - 1];
  producto.stock++;
  document.getElementById(`stock-${carrito[index].productoID}`).textContent =
    producto.stock;

  // Eliminar producto por índice
  carrito.splice(index, 1);

  // Actualizar localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Renderizar de nuevo
  renderizarCarrito();
}

function vaciarCarrito() {
  // Restaurar stock de todos los productos
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.forEach((item) => {
    const producto = productos[item.productoID - 1];
    producto.stock++;
    document.getElementById(`stock-${item.productoID}`).textContent =
      producto.stock;
  });

  // Limpiar localStorage
  localStorage.removeItem("carrito");

  // Renderizar
  renderizarCarrito();
}

function cargarCarrito() {
  // Cargar carrito al iniciar la página
  renderizarCarrito();
}

// Funciones de Checkout
function mostrarCheckout() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Validar que hay productos en el carrito
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  // Mostrar modal de checkout
  const modal = document.getElementById("checkout-modal");
  modal.style.display = "flex";

  // Actualizar totales en el modal
  const subtotal = parseFloat(
    document.getElementById("subtotal-carrito").textContent
  );
  const descuento = parseFloat(
    document.getElementById("descuento-carrito").textContent
  );
  const iva = parseFloat(document.getElementById("iva-carrito").textContent);
  const total = parseFloat(
    document.getElementById("total-carrito").textContent
  );

  document.getElementById("modal-subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("modal-descuento").textContent = descuento.toFixed(2);
  document.getElementById("modal-iva").textContent = iva.toFixed(2);
  document.getElementById("modal-total").textContent = total.toFixed(2);
}

function realizarCompra() {
  // Simular compra
  alert("¡Compra realizada con éxito!");

  // Vaciar carrito
  localStorage.removeItem("carrito");
  localStorage.setItem("productos", JSON.stringify(productos));

  // Cerrar modal
  cerrarCheckout();

  // Renderizar carrito vacío
  renderizarCarrito();
}

function cerrarCheckout() {
  const modal = document.getElementById("checkout-modal");
  modal.style.display = "none";
}
