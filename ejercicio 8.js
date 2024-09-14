let usuarios = [
    { nombre: 'Carlos', estado: 'activo' },
    { nombre: 'Pablo', estado: 'inactivo' },
    { nombre: 'Alberto', estado: 'activo' },
    { nombre: 'Marta', estado: 'inactivo' }
];

let usuariosActivos = usuarios.filter(usuario => usuario.estado === 'activo');

console.log(usuariosActivos);
