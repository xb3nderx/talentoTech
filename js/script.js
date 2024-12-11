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
console.log(productos);
//armo un array de imagenes
let imagProd = [
  "../images/productos/front-F18-mug.webp", "../images/productos/FA-18-keyholder.jpg",
  "../images/productos/FA-18-t-shirt.jpg", "../images/productos/FA-18-gorra.jpg",
  "../images/productos/FA-18-Campera.webp", "../images/productos/FA-18-sunglasses.jpg",
  "../images/productos/FA-18-model.jpg", "../images/productos/FA-18-poster.jpg"
]

//carga los prod en la pagina
let container = document.getElementsByClassName("grid-container");

for (let i = 0; i < productos.length; i++) {
  let unDiv = document.createElement("div");
  unDiv.classList.add("grid-card");

  let pName = document.createElement("p");
  pName.classList.add("card-name");
  pName.innerHTML = productos[i].name.toUpperCase();

  let imag = document.createElement("img");
  imag.classList.add("card-image");
  imag.src = imagProd[i];

  let pDesc = document.createElement("p");
  pDesc.classList.add("card-desc");

  let btn = document.createElement("button");
  btn.classList.add("card-btn-desc");

  btn.textContent = "DESCRIPCION";
  btn.onclick = () =>
    (pDesc.innerHTML =
      pDesc.innerHTML.trim() === "" ? productos[i].descripcion : "");
  unDiv.appendChild(pName);
  unDiv.appendChild(imag);
  unDiv.appendChild(pDesc);

  unDiv.appendChild(btn);
  container[0].appendChild(unDiv);
}
