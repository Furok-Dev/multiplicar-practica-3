const fs = require('fs');
const colors = require('colors');

let imprimirTabla = (base, limite=10) => {
    return new Promise ((resolve, reject) => {

        if (!Number(base)){
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }
        let tex = "Probando".bgGreen;
        console.log("----------------------------------".green);
        console.log(` TABLA DE MULTIPLICAR - ${base}`.green);
        console.log("----------------------------------".green);
        console.log(tex);
        
        for (let i=1; i<=limite; i++){
            console.log(`${base} x ${i} = ${base * i}`);
        }
    });
}

let crearArchivo = (base, limite=10) => {
    return new Promise ((resolve, reject) => {


        if (!Number(base)){
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = "";
        
        for (let i=1; i<=limite; i++){
            data += `${base} x ${i} = ${base * i} \n`;
        }
        
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            resolve(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo,
    imprimirTabla
}