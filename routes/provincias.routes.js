
import Routes from "./routes.js";
import ProvinciaControllers from "../controllers/provincia.controllers.js";
// import { middlerares } from "../middlewares/routes.middlerares.js";


export default class ProvinciasRoutes extends Routes {
    constructor() {
        super();
        this.controller = new ProvinciaControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
        // .use(middlerares.routes.checkRoute)
            .get('/', this.controller.getProvincias)            
            .get('/:id', this.controller.getProvinciaById)
            .post('/', this.controller.addProvincia)
            .put('/', this.controller.modifyProvincia)
            .delete('/:id', this.controller.deleteProvincia)
    }
}

