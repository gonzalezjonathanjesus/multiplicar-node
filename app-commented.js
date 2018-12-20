//const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;

/* Tabla de multiplicar */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
//El .js en un require es opcional, y de hecho usualmente no se utiliza

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => { console.log(error); });
        break;

    default:
        console.log('Comando desconocido');
}

//let base = 5;

//console.log(process.argv);

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]; //split separa un string en un array, toma como argumento el separador

//console.log('Limite', argv.limite);



console.log(argv);