import User from '../../models/User.js';

export default class UsersHelpers{

    createUser(newData){
        const { idusuario, email, contrasenia, tipousuario, activo } = newData;
        const user = new User(idusuario, email, contrasenia, tipousuario, activo);
        console.log(user);
        return user;
    }


}