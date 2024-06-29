import express from 'express';
import UsersRoutes from '../routes/users.routes.js';
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
        Server.app.use('/users', usersRoutes.router);
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