let usuarios = ['Julian', 'Carolina', 'Luis', 'Ana'];
let nombresConcatenados = usuarios.reduce((acc, nombre) => acc + ' ' + nombre, '');
console.log(nombresConcatenados.trim());
