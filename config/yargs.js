const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de mutiplicar', opciones)
    .command('crear', 'Crea en un archivo la tabla de mutiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}