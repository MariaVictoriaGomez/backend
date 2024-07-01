import Routes from "./routes.js";
import TipoConsultaControllers from "../controllers/tipoconsulta.controllers.js";


export default class TipoConsultaRoutes extends Routes {
    constructor() {
        super();
        this.controller = new TipoConsultaControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
        // .use(middlerares.routes.checkRoute)
            .get('/', this.controller.getTipoConsulta)            
            .get('/:id', this.controller.getTipoConsultaById)
    }
}

