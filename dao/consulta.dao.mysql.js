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

    async getNextConsultaId() {
        const query = `SELECT MAX(idconsulta) + 1 as nextId FROM ${this.table}`;
        const [result] = await this.connection.promise().query(query);
        console.log("RESULTADO: ", result[0]);
        return result[0].nextId;
    }
    

    async addConsulta(nuevoConsulta) {
        const { idconsulta, idusuario, consulta, fecha } = nuevoConsulta
        const query = `INSERT INTO ${this.table} ( idconsulta, idusuario, consulta, fecha) VALUES ('${idconsulta}',  '${idusuario}', '${consulta}', '${fecha}')`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async addTipoxConsulta(idconsulta, idtipoconsulta) {
        const query = 'INSERT INTO tipo_x_consulta (idconsulta, idtipoconsulta) VALUES (?, ?)';
        await pool.query(query, [idconsulta, idtipoconsulta]);
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
