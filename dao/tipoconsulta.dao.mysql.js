import Mysql from '../db/connections/Mysql.config.js';

export default class TipoConsultaDaoMysql extends Mysql {
    constructor() {
        super()
        this.table = 'tipoconsulta'
    }

    async getTipoConsulta() {
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getTipoConsultaById(idtipoconsulta) {
        const query = `SELECT * FROM ${this.table} WHERE idtipoconsulta = ${idtipoconsulta}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

}
 