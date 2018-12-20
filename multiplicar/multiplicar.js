// Requireds types
const fs = require('fs'); //Librería que es propia de node.js
// const fs = require('express'); //Librería que no viene en node.js (Paquetes no nativos de nodejs)
// const fs = require('./fs'); //Requireds de archivos que creamos nosotros
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (Number(base) && Number(limite)) {
        console.log('================================'.green);
        console.log(`========Tabla del ${base}========`.red);
        console.log('================================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}\n`.red);
        }
    } else {
        if (!Number(base) && !Number(limite)) {
            console.log(`El límite ${limite} y la base ${base} no son números`);
        } else if (!Number(base)) {
            console.log(`La base ${base} no es un número`);
        } else if (!Number(limite)) {
            console.log(`El límite ${limite} no es un número`);
        }
    }
}

//Esta es una forma de hacerlo

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject('Error: ' + 'El límite '.red + limite.yellow + ' y la base '.red + base.yellow + ' no son números'.red);
            return;
        } else if (!Number(base)) {
            reject('Error:' + 'La base '.red + base.yellow + ' no es un número'.red);
            return;
        } else if (!Number(limite)) {
            reject('Error:' + 'El límite '.red + limite.yellow + ' no es un número'.red);
            return;
        } else {
            let data = `Tabla del ${base}\n`;

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i} \n`;
            }

            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else {
                    resolve(`tabla-${base}-al-${limite}.txt`.green);
                }
            });
        }

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}


/*
// esta es otra forma de hacerlo

module.exports.crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        let data = `Tabla del ${base}\n\n`;

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

*/