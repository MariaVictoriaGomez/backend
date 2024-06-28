
import Routes from "./routes.js";
import UserControllers from "../controllers/user.controllers.js";
import { middlerares } from "../middlewares/routes.middlerares.js";


export default class UsersRoutes extends Routes {
    constructor() {
        super();
        this.controller = new UserControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
        .use(middlerares.routes.checkRoute)
            .get('/', this.controller.getUsers)
            .get('/user', this.controller.getUserByEmail)
            .get('/:id', this.controller.getUserById)
            .post('/', this.controller.addUser)
            .put('/', this.controller.modifyUser)
            .delete('/:id', this.controller.deleteUser)
    }
}



