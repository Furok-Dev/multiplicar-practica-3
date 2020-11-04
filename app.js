//const multiplicar = require('./multiplicar/multiplicar')
const {crearArchivo, imprimirTabla} = require('./multiplicar/multiplicar')
const yarg = require('./config/yargs').argv;


let comando = yarg._[0];

switch(comando){
    case 'crear':
        crearArchivo(yarg.base, yarg.limite)
        .then(mensaje => {
            console.log(mensaje);
        }).catch(e => {
            console.log(e);
        });
        break;
    case 'imprimir':
        imprimirTabla(yarg.base, yarg.limite).catch(e => {
                console.log(e);
            });
            break;
}


