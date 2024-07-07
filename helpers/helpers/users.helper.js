// users.helper.js

import User from '../../models/User.js'

export default class UsersHelpers {
    createUser(data) {
        return new User(
            parseInt(data.idusuario || 1),
            data.email,
            data.contrasenia,
            2,
            1,
            parseInt(data.idpersona || 1),
            data.nombre,
            data.apellido,
            data.dni,
            data.fecha_nac,
            parseInt(data.provincia, 10)
        );
    }
}
