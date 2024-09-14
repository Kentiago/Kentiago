let estudiantes = [
    { nombre: "Estudiante 1", nota: 75 },
    { nombre: "Estudiante 2", nota: 55 },
    { nombre: "Estudiante 3", nota: 82 },
    { nombre: "Estudiante 4", nota: 48 },
    { nombre: "Estudiante 5", nota: 90 },
    { nombre: "Estudiante 6", nota: 67 },
    { nombre: "Estudiante 7", nota: 59 },
    { nombre: "Estudiante 8", nota: 88 },
    { nombre: "Estudiante 9", nota: 62 },
    { nombre: "Estudiante 10", nota: 45 },
    { nombre: "Estudiante 11", nota: 73 },
    { nombre: "Estudiante 12", nota: 80 },
    { nombre: "Estudiante 13", nota: 54 },
    { nombre: "Estudiante 14", nota: 91 },
    { nombre: "Estudiante 15", nota: 66 },
    { nombre: "Estudiante 16", nota: 58 },
    { nombre: "Estudiante 17", nota: 77 },
    { nombre: "Estudiante 18", nota: 49 },
    { nombre: "Estudiante 19", nota: 85 },
    { nombre: "Estudiante 20", nota: 60 }
];

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota > 60);

console.log(estudiantesAprobados);
