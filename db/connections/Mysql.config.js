import mysql from 'mysql2'

export default class Mysql {
    constructor() {

        // aca cambian sus credenciales segun corresponda
        
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tiendacafe'
            // host: process.env.HOST_DB,
            // user: process.env.USER_DB,
            // password: process.env.PASS_DB,
            // database: process.env.DB
        })
        this.tryConnection();
    }

    tryConnection(){
        this.connection.connect(err => {
            err 
                ? console.log('No se pudo conectar a la base de datos')
                : console.log('Conexion a DB establecida')  
        })
    }
}











