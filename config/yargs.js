
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l'
    }
}



const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts )
    .command('crear', 'Genera tabla de multiplicar con la condición limite', opts )
    .help()
    .argv;

module.exports = {
    argv,
}