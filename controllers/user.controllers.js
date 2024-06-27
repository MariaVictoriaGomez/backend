import UsersDaoMysql from '../dao/user.dao.mysql.js';
import UsersHelpers from '../helpers/users.helper.js';

export default class UserControllers {

    constructor() {
        //     this.db = new UsersDaoMemory();
        this.db = new UsersDaoMysql()
        this.helpers = new UsersHelpers();
    }

    getUsers = async (req, res) => {
        const users = await this.db.getUsers();
        res.json(users);
    }

    getUserById = async (req, res) => {
        const { id } = req.params
        const user = await this.db.getUserById(id)
        res.json(user)
    }

    getUsersByName = async (req, res) => {
         const { name } = req.query;
        const result = await this.db.getUsersByName(name);
        res.json(result);
    }

    addUser = async (req, res) => {
        const newUser = this.helpers.createUser(req.body);
        const result = await this.db.addUser(newUser);
        res.json(result);
    }

    modifyUser = async (req, res) => {
        const modifiedUser = this.helpers.createUser(req.body)
        const result = await this.db.modifyUser(modifiedUser)
        res.json(result)
    }

    deleteUser = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteUser(id)
        res.json(result);
    }
}



