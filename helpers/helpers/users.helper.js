// users.helper.js

import User from '../../models/User.js'

export default class UsersHelpers {
    createUser(data) {
        return new User(
            parseInt(data.idusuario || 1),
            data.email,
            data.contrasenia,
            parseInt(data.tipousuario, 10),
            parseInt(data.activo, 10),
            parseInt(data.idpersona || 1),
            data.nombre,
            data.apellido,
            data.dni,
            data.fecha_nac,
            parseInt(data.idprovincia, 10)
        );
    }
}
