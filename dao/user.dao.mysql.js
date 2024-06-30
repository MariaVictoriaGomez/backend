import Mysql from '../db/connections/Mysql.config.js';

export default class UsersDaoMysql extends Mysql {
    constructor() {
        super();
        this.userTable = 'usuario';
        this.personTable = 'persona';
    }

    async getUsers() {
        try {
            const query = `SELECT u.*, p.nombre, p.apellido, p.dni, p.fecha_nac, p.idprovincia 
                           FROM ${this.userTable} u 
                           JOIN ${this.personTable} p ON u.email = p.email`;
            const [result] = await this.connection.promise().query(query);
            return result;
        } catch (error) {
            return [];
        }
    }

    async getUserById(idusuario) {
        const query = `SELECT u.*, p.nombre, p.apellido, p.dni, p.fecha_nac, p.idprovincia 
                       FROM ${this.userTable} u 
                       JOIN ${this.personTable} p ON u.email = p.email 
                       WHERE u.idusuario = ${idusuario}`;
        const [result] = await this.connection.promise().query(query);
        return result[0];
    }

    async getUserByEmail(email) {
        const query = `SELECT u.*, p.nombre, p.apellido, p.dni, p.fecha_nac, p.idprovincia 
                       FROM ${this.userTable} u 
                       JOIN ${this.personTable} p ON u.email = p.email 
                       WHERE u.email LIKE '%${email}%'`;
        const [result] = await this.connection.promise().query(query);
        return result[0];
    }

    async addUser(newUser) {
        const { email, contrasenia, tipousuario, activo, nombre, apellido, dni, fecha_nac, idprovincia } = newUser;
        const connection = await this.connection.promise();
        try {
            await connection.beginTransaction();

            const userQuery = `INSERT INTO ${this.userTable} (email, contrasenia, idtipousuario, activo) VALUES (?, ?, ?, ?)`;
            await connection.query(userQuery, [email, contrasenia, tipousuario, activo]);

            const personQuery = `INSERT INTO ${this.personTable} (email, nombre, apellido, dni, fecha_nac, idprovincia, activo) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            await connection.query(personQuery, [email, nombre, apellido, dni, fecha_nac, idprovincia, activo]);

            await connection.commit();
            return true;
        } catch (error) {
            console.log(error);
            await connection.rollback();
            return false;
        }
    }

    async modifyUser(modifiedUser) {
        const { idusuario, email, contrasenia, tipousuario, activo, nombre, apellido, dni, fecha_nac, idprovincia } = modifiedUser;
        const connection = await this.connection.promise();
    
        try {
            await connection.beginTransaction();
    
            // 1. Actualizar la tabla persona
            const personQuery = `
                UPDATE ${this.personTable} 
                SET email = ?, nombre = ?, apellido = ?, dni = ?, fecha_nac = ?, idprovincia = ?, activo = ? 
                WHERE email = (SELECT email FROM ${this.userTable} WHERE idusuario = ?)
            `;
            await connection.query(personQuery, [email, nombre, apellido, dni, fecha_nac, idprovincia, activo, idusuario]);
    
            // 2. Actualizar la tabla usuario
            const userQuery = `
                UPDATE ${this.userTable} 
                SET email = ?, contrasenia = ?, idtipousuario = ?, activo = ? 
                WHERE idusuario = ?
            `;
            await connection.query(userQuery, [email, contrasenia, tipousuario, activo, idusuario]);
    
            await connection.commit();
            return true;
        } catch (error) {
            console.error('Error al modificar usuario en la base de datos:', error);
            await connection.rollback();
            return false;
        }
    }
    



    async deleteUser(email) {
        const connection = await this.connection.promise();

        try {
            await connection.beginTransaction();

            const personQuery = `DELETE FROM ${this.personTable} WHERE email = ?`;
            const [personResult] = await connection.query(personQuery, [email]);

            if (personResult.affectedRows === 0) {
                throw new Error('No se encontró la persona con el email especificado');
            }

            const userQuery = `DELETE FROM ${this.userTable} WHERE email = ?`;
            const [userResult] = await connection.query(userQuery, [email]);

            if (userResult.affectedRows === 0) {
                throw new Error('No se encontró el usuario con el email especificado');
            }

            await connection.commit();
            return true;
        } catch (error) {
            console.error('Error durante la transacción:', error);
            await connection.rollback();
            return false;
        }
    }


}
