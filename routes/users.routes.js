import Routes from './routes.js';
import UserControllers from '../controllers/user.controllers.js';

 import { middlewares } from '../middlewares/routes.middlewares.js';


export default class UsersRoutes extends Routes {
    constructor() {
        super();
        this.controller = new UserControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
            .use(middlewares.checkRoute)
            .get('/', this.controller.getUsers)
            .get('/user', this.controller.getUserByEmail)
            .get('/:id',
                middlewares.checkParams,
                this.controller.getUserById)
            .post('/', this.controller.addUser)
            .put('/', this.controller.modifyUser)
            .delete('/:id', 
                middlewares.checkParams,
                this.controller.deleteUser)
    }
}



