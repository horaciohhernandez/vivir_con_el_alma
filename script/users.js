import {nombre, apellido, correo, pass} from '../db/data.json'

export default () => {

    const data = {
        usuario: []
    }

    for (let i = 0; i < 50; i++) {

        data.usuario.push({
            "nombre": nombre,
            "apellido": apellido,
            "correo": correo,
            "pass": pass,      
            
        })

    }

    return data
}

