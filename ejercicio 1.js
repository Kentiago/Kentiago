let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Smartphone", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Auriculares", precio: 150 },
    { nombre: "Reloj inteligente", precio: 250 },
    { nombre: "Cámara", precio: 800 },
    { nombre: "Televisor", precio: 1200 },
    { nombre: "Consola de videojuegos", precio: 400 },
    { nombre: "Altavoces", precio: 200 },
    { nombre: "Proyector", precio: 600 },
    { nombre: "Impresora", precio: 350 },
    { nombre: "Monitor", precio: 450 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Ratón", precio: 50 },
    { nombre: "Disco duro externo", precio: 120 },
    { nombre: "Pendrive", precio: 30 },
    { nombre: "Router", precio: 80 },
    { nombre: "Webcam", precio: 70 },
    { nombre: "Microfono", precio: 90 },
    { nombre: "Tarjeta gráfica", precio: 700 }
];

let productosConImpuesto = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precioConImpuesto: (producto.precio * 1.15).toFixed(2)
    };
});

console.log(productosConImpuesto);
