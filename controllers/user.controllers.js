import UsersDaoMysql from '../dao/user.dao.mysql.js';
import UsersHelpers from '../helpers/helpers/users.helper.js';

export default class UserControllers {

    constructor() {
        this.db = new UsersDaoMysql()
        this.helpers = new UsersHelpers();
    }

    getUsers = async (req, res) => {
        const users = await this.db.getUsers();
        res.json(users);
    }

    getUserById = async (req, res) => {
        const { id } = req.params;
        const user = await this.db.getUserById(id);
        res.json(user);
    }

    getUserByEmail = async (req, res) => {
        const { email } = req.query;
        const result = await this.db.getUserByEmail(email);
        res.json(result);
    }

    addUser = async (req, res) => {
        const newUser = this.helpers.createUser(req.body);
        console.log(newUser)
        const result = await this.db.addUser(newUser);
        console.log(result)
        result ? res.redirect('/') : res.redirect('/');
    }

    modifyUser = async (req, res) => {
        const modifiedUser = this.helpers.createUser(req.body);
    
        try {
            const result = await this.db.modifyUser(modifiedUser);
    
            if (result) {
                res.json({ message: 'Usuario modificado correctamente' });
            } else {
                res.status(404).json({ error: 'No se pudo modificar el usuario' });
            }
        } catch (error) {
            console.error('Error al modificar usuario:', error);
            res.status(500).json({ error: 'Error interno al modificar usuario' });
        }
    }
    

    deleteUser = async (req, res) => {
        const { id } = req.params;
        const result = await this.db.deleteUser(id);
        res.json(result);
    }
}
