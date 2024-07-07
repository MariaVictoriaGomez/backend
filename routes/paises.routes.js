
import Routes from "./routes.js";
import PaisControllers from "../controllers/pais.controllers.js";
// import { middlerares } from "../middlewares/routes.middlerares.js";


export default class PaisesRoutes extends Routes {
    constructor() {
        super();
        this.controller = new PaisControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
        // .use(middlerares.routes.checkRoute)
            .get('/', this.controller.getPaises)            
            .get('/:id', this.controller.getPaisById)
            .post('/', this.controller.addPais)
            .put('/', this.controller.modifyPais)
            .delete('/:id', this.controller.deletePais)
    }
}

