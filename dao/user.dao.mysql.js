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
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            console.log(result)
            return result
        } catch (error) { return [] }
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
        try {
            const {idusuario, email, contrasenia, tipousuario, activo } = nuevoUsuario
            const query = `INSERT INTO ${this.table} (email, contrasenia, idtipousuario, activo) VALUES ('${email}',  '${contrasenia}', ${tipousuario}, ${activo})`
            const [result] = await this.connection.promise().query(query)
            console.log(result)
            // return result[0]
            return result.affectedRows > 0
        } catch (error) {
            return false
        }
    }

    async modifyUser(data) {
        try {
            const { idusuario, email, contrasenia, tipousuario, activo } = data
            const query = `UPDATE ${this.table} SET email = ?, contrasenia = ?, idtipousuario = ?, activo = ? WHERE idusuario = ${idusuario}`
            const [result] = await this.connection.promise().query(query, [email, contrasenia, tipousuario, activo])
            return result.affectedRows > 0 ? Error(0) : Error(3)
        } catch (error) {
            return Error(10);
        }
    }

    async deleteUser(idusuario) {
        try{
        const query = `DELETE FROM ${this.table} WHERE idusuario = ${idusuario}`
        const [result] = await this.connection.promise().query(query);
        return result.affectedRows > 0 ? Error(0) : Error
        } catch(error){
            return Error(10);
        }
    }

    incomplete = (req, res) => {
        throw Error(4);
    }


}
