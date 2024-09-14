let productos = [
    { nombre: 'Producto 1', precioOriginal: 100, precioDescuento: 80 },
    { nombre: 'Producto 2', precioOriginal: 150, precioDescuento: 150 },
    { nombre: 'Producto 3', precioOriginal: 200, precioDescuento: 180 },
];

let tieneDescuento = productos.some(producto => producto.precioDescuento < producto.precioOriginal);

console.log(tieneDescuento); // true
