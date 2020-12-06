const { crearArchivo, imprimirTabla } = require('./multiplicar/multiplicar');
const yarg = require('./config/yargs').argv;

const comando = yarg._[0];

switch (comando) {
  case 'crear':
    crearArchivo(yarg.base, yarg.limite)
      .then(mensaje => {
        console.log(mensaje);
      })
      .catch(e => {
        console.log(e);
      });
    break;
  case 'imprimir':
    imprimirTabla(yarg.base, yarg.limite).catch(e => {
      console.log(e);
    });
    break;
  default:
    console.log('ups! algo salio mal...');
}
