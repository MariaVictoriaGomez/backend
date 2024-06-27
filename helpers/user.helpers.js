import User from '../models/User.js';

export default class UsersHelpers{

    createUser(newData){
        const { id, username, password, usertype } = newData;
        const user = new User(id, username, password, usertype);
        console.log(user);
        return user;
    }


}