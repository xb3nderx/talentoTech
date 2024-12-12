function generarProductos() {
  const productos = [];

  let producto = {
    id: 1,
    name: "taza termica",
    descripcion: "Conserva el frio y el calor",
    amount: 10, // Genera un precio aleatorio
  };
  productos.push(producto);
  producto = {
    id: 2,
    name: "llavero",
    descripcion: "para guardar tus llaves",
    amount: 20, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 3,
    name: "remera",
    descripcion: "la mejor con la mejor foto",
    amount: 15, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 4,
    name: "gorra",
    descripcion: "con visera y ajuste de tamaño",
    amount: 5, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 5,
    name: "campera",
    descripcion: "de tipo aviador",
    amount: 30, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 6,
    name: "anteojos negros",
    descripcion: "los mas facheros",
    amount: 40, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 7,
    name: "Modelo a escala F/A-18",
    descripcion: "El mejor avion a escala",
    amount: 5, // Genera un precio aleatorio
  };
  productos.push(producto);

  producto = {
    id: 8,
    name: "Poster Desplegable",
    descripcion: "Original de la pelicula TopGun Maverick",
    amount: 50, // Genera un precio aleatorio
  };
  productos.push(producto);

  return productos;
}

let productos = generarProductos();

localStorage.setItem("productos", JSON.stringify(productos));
