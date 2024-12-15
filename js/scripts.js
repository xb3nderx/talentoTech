let productos = localStorage.getItem("productos");
if (productos === null) {
  productos = [];

  let producto = {
    id: 1,
    nombre: "taza termica",
    precio: 50,
    descuento: 0.15,
    descripcion: "Conserva el frio y el calor",
    stock: 10, // Genera un precio aleatorio
  };
  productos.push(producto);
  producto = {
    id: 2,
    nombre: "llavero",
    precio: 10,
    descuento: 0.05,
    descripcion: "para guardar tus llaves",
    stock: 20, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 3,
    nombre: "remera",
    precio: 30,
    descuento: 0.2,
    descripcion: "la mejor con la mejor foto",
    stock: 15, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 4,
    nombre: "gorra",
    precio: 15,
    descuento: 0.1,
    descripcion: "con visera y ajuste de tamaño",
    stock: 5, // Genera un precio aleatorio
  };
  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));
}
