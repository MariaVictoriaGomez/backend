import mysql from 'mysql2'

export default class Mysql {
    constructor() {

        // aca cambian sus credenciales segun corresponda
        
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'tiendacafe'
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











