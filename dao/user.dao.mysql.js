import Mysql from '../db/connections/Mysql.config.js';

export default class UsersDaoMysql extends Mysql {
    constructor() {
        super()
        this.table = 'usuario'
    }

    // #createTable(){
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         id IT PRIMARY KEY,
    //         name VARCHAR(100) NOT NULL,
    //         age INT NOT NULL
    //     )`

    //     this.connection.query(query);
    // }


    async getUsers() {
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getUserById(idusuario) {
        const query = `SELECT * FROM ${this.table} WHERE idusuario = ${idusuario}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    // async getUserByEmail(email) {
    //     const query = `SELECT * FROM ${this.table} WHERE email LIKE ?`;
    //     const result = await this.connection.promise().query(query, [`%${email}%`]);
    //     console.log(result);
    //     return result[0];
    // }

    async getUserByEmail(email) {
        const query = `SELECT * FROM ${this.table} WHERE email LIKE '%${email}%'`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async addUser(nuevoUsuario) {
        // console.log(newUser)
        const { email, contrasenia, tipousuario, activo } = nuevoUsuario
        const query = `INSERT INTO ${this.table} (email, contrasenia, idtipousuario) VALUES ('${email}',  '${contrasenia}', ${tipousuario})`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async modifyUser(data) {
        const {idusuario, email, contrasenia, tipousuario, activo } = data
        const query = `UPDATE ${this.table} SET email = ?, contrasenia = ?, idtipousuario = ?, activo = ? WHERE idusuario = ${idusuario}`
        const [result] = await this.connection.promise().query(query, [email, contrasenia, tipousuario, activo])
        return result;
    }

    async deleteUser(idusuario) {
        const query = `DELETE FROM ${this.table} WHERE idusuario = ${idusuario}`
        const [result] = await this.connection.promise().query(query);
        return result;
    }
}
