import Mysql from '../db/connections/Mysql.config.js';

export default class UsersDaoMysql extends Mysql{
    constructor(){
        super()
        this.table = 'user'
    }

    // #createTable(){
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         id IT PRIMARY KEY,
    //         name VARCHAR(100) NOT NULL,
    //         age INT NOT NULL
    //     )`

    //     this.connection.query(query);
    // }

    
    async getUsers (){
        const query = `SELECT * FROM ${this.table}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getUserById(id){
        const query = `SELECT * FROM ${this.table} WHERE id = ${id}`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async getUsersByName(name) {
        const query = `SELECT * FROM ${this.table} WHERE user like = '%${name}%'`
        const result = await this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async addUser(newUser){
        // console.log(newUser)
        const { id, username, password, usertype } = newUser
        const query = `INSERT INTO ${this.table} VALUES (${id}, '${password}',  '${username}', ${usertype})`
        const result = this.connection.promise().query(query)
        console.log(result)
        return result[0]
    }

    async modifyUser(data){
        const { id, username, password, usertype } = data
        const query = `UPDATE ${this.table} SET user = ?, password = ?, usertype_id = ? WHERE id = ${id}`
        const [result] = await this.connection.promise().query(query, [username, password, usertype])
        return result;
    }

    async deleteUser(id){
        const query = `DELETE FROM ${this.table} WHERE id = ${id}`
        const [result] = await this.connection.promise().query(query);
        return result;
    }
}
