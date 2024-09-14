let productos = [
    { nombre: 'Producto 1', precio: 30000 },
    { nombre: 'Producto 2', precio: 60000 },
    { nombre: 'Producto 3', precio: 45000 },
];

let hayProductoBarato = productos.some(producto => producto.precio < 50000);

console.log(hayProductoBarato); // true
