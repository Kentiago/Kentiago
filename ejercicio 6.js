let estudiantes = [
    { nombre: 'Alejandro', nota: 85 },
    { nombre: 'Flor', nota: 90 },
    { nombre: 'Alfonso', nota: 78 },
    { nombre: 'Luz', nota: 92 }
];

let promedio = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0) / estudiantes.length;

console.log(promedio);
