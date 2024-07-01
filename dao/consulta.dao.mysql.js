import Mysql from '../db/connections/Mysql.config.js';

export default class ConsultaDaoMysql extends Mysql {
    constructor() {
        super()
        this.table = 'consulta'
    }

    // #createTable(){
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         id IT PRIMARY KEY,
    //         name VARCHAR(100) NOT NULL,
    //         age INT NOT NULL
    //     )`

    //     this.connection.query(query);
    // }


    async getConsultas() {
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getConsultasById(idconsulta) {
        const query = `SELECT * FROM ${this.table} WHERE idconsulta = ${idconsulta}`
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


    async addConsulta(nuevaConsulta) {
        // console.log(newUser)
        const { idconsulta, consulta, activo } = nuevoUsuario
        const query = `INSERT INTO ${this.table} (idusuario, consulta, fecha) VALUES ('${idusuario}',  '${consulta}', curdate())`
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
