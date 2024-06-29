import Mysql from '../db/connections/Mysql.config.js';

export default class PaisesDaoMysql extends Mysql {
    constructor() {
        super()
        this.table = 'pais'
    }

    // #createTable(){
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         id IT PRIMARY KEY,
    //         name VARCHAR(100) NOT NULL,
    //         age INT NOT NULL
    //     )`

    //     this.connection.query(query);
    // }


    async getPaises() {
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getPaisById(idpais) {
        const query = `SELECT * FROM ${this.table} WHERE idpais = ${idpais}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async addPais(nuevoPais) {
        // console.log(newUser)
        const { idpais, nombrepais } = nuevoPais
        const query = `INSERT INTO ${this.table} ( idpais, nombrepais) VALUES ('${idpais}',  '${nombrepais}')`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async modifyPais(data) {
        const { idpais, nombrepais } = data
        const query = `UPDATE ${this.table} SET idpais = ?, nombrepais = ? WHERE idpais = ${idpais}`
        const [result] = await this.connection.promise().query(query, [idpais, nombrepais])
        return result;
    }

    async deletePais(idpais) {
        const query = `DELETE FROM ${this.table} WHERE idpais = ${idpais}`
        const [result] = await this.connection.promise().query(query);
        return result;
    }
}
