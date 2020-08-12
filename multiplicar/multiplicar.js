
// requires
const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

let listarTabla = async ( base, limite = 10 ) => {

        if ( !Number(limite) ) {
            throw new Error (`${ limite } No es un número`);
        }

        let data = ''

        for (let i = 1; i <= `${ limite }`; i++) {
            data += (`${base} * ${i} = ${base * i}\n`)
        }

        return data.silly;

}


let crearArchivo = async (base, limite = 10 ) => {

    if (!Number(base)) {
        throw new Error(`${base} No es un número`);
    }

    let data = ''

    for (let i = 1; i <= `${limite}`; i++) {
        data += (`${base} * ${i} = ${base * i}\n`)
    }

    fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

        if (err) {
            throw new Error(err)
        }

    });

    return (`tabla-${base}-al-${limite}.txt`).silly
};




module.exports = {
    crearArchivo,
    listarTabla
}
