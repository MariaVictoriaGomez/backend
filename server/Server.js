import express from 'express';
import UsersRoutes from '../routes/users.routes.js';
import ProvinciasRoutes from '../routes/provincias.routes.js'
import { errorController } from '../middlewares/errors.middlewares.js';

export default class Server {
    static app = express();

    static public() {
        Server.app.use(express.static('public'));
    }

    static middlewares() {
        Server.app.use(express.json());
        Server.app.use(express.urlencoded({ extended: true }));
    }

    static routes() {
        const usersRoutes = new UsersRoutes();
        const provinciasRoutes = new ProvinciasRoutes();
        //duplicas pais
        Server.app.use('/users', usersRoutes.router);
       Server.app.use('/provincias' , provinciasRoutes.router);
        //duplicar pais.
    }

    static errors() {
        Server.app.use(errorController);
    }

    static runServer(port) {
        Server.app.listen(port, () => console.log(`listen at http://localhost:${port}`));
    }

    static run(port) {
        console.clear();
        Server.public();
        Server.middlewares();
        Server.routes();
        Server.errors();
        Server.runServer(port);
    }
}