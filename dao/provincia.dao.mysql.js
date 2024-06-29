import Mysql from '../db/connections/Mysql.config.js';

export default class ProvinciasDaoMysql extends Mysql {
    constructor() {
        super()
        this.table = 'provincia'
    }

    // #createTable(){
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         id IT PRIMARY KEY,
    //         name VARCHAR(100) NOT NULL,
    //         age INT NOT NULL
    //     )`

    //     this.connection.query(query);
    // }


    async getProvincias() {
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getProvinciaById(idprovincia) {
        const query = `SELECT * FROM ${this.table} WHERE idprovincia = ${idprovincia}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    


    async addProvincia(nuevaProvincia) {
        // console.log(newUser)
        const { idprovincia, nombreprovincia, pais } = nuevaProvincia
        const query = `INSERT INTO ${this.table} ( idprovincia, nombreprovincia, pais) VALUES ('${idprovincia}',  '${nombreprovincia}', ${pais})`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async modifyProvincia(data) {
        const { idprovincia, nombreprovincia, pais } = data
        const query = `UPDATE ${this.table} SET idprovincia = ?, nombreprovincia = ?, pais = ? WHERE idprovincia = ${idprovincia}`
        const [result] = await this.connection.promise().query(query, [idprovincia, nombreprovincia, pais])
        return result;
    }

    async deleteProvincia(idprovincia) {
        const query = `DELETE FROM ${this.table} WHERE idprovincia = ${idprovincia}`
        const [result] = await this.connection.promise().query(query);
        return result;
    }
}
