let productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 },
    { nombre: 'Producto 4', precio: 40 },
    { nombre: 'Producto 5', precio: 50 },
    { nombre: 'Producto 6', precio: 60 },
    { nombre: 'Producto 7', precio: 70 },
    { nombre: 'Producto 8', precio: 80 },
    { nombre: 'Producto 9', precio: 90 },
    { nombre: 'Producto 10', precio: 100 },
    { nombre: 'Producto 11', precio: 110 },
    { nombre: 'Producto 12', precio: 120 },
    { nombre: 'Producto 13', precio: 130 },
    { nombre: 'Producto 14', precio: 140 },
    { nombre: 'Producto 15', precio: 150 },
    { nombre: 'Producto 16', precio: 160 },
    { nombre: 'Producto 17', precio: 170 },
    { nombre: 'Producto 18', precio: 180 },
    { nombre: 'Producto 19', precio: 190 },
    { nombre: 'Producto 20', precio: 200 }
];

let totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);

console.log(`El total de la compra es: ${totalCompra}`);
