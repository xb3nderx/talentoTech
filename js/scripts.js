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

localStorage.setItem("productos", JSON.stringify(productos));
