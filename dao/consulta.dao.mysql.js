import Mysql from '../db/connections/Mysql.config.js';

export default class ConsultasDaoMysql extends Mysql {
    constructor() {
        super()
        this.table = 'consulta'
    }

    async getConsultas() {
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getConsultaById(idconsulta) {
        const query = `SELECT * FROM ${this.table} WHERE idconsulta = ${idconsulta}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async addConsulta(nuevoConsulta) {
        const { idconsulta, idusuario, consulta, fecha } = nuevoConsulta
        const query = `INSERT INTO ${this.table} ( idconsulta, idusuario, consulta, fecha) VALUES ('${idconsulta}',  '${idusuario}', '${consulta}', '${fecha}')`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async modifyConsulta(data) {
        const { idconsulta, idusuario, consulta, fecha } = data
        const query = `UPDATE ${this.table} SET idconsulta = ?, idusuario = ?, consulta = ?, fecha = ? WHERE idconsulta = ${idconsulta}`
        const [result] = await this.connection.promise().query(query, [idconsulta, idusuario, consulta, fecha ])
        return result;
    }

    async deleteConsulta(idconsulta) {
        const query = `DELETE FROM ${this.table} WHERE idconsulta = ${idconsulta}`
        const [result] = await this.connection.promise().query(query);
        return result;
    }
}
