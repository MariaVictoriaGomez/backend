
import Routes from "./routes.js";
import ConsultaControllers from "../controllers/consulta.controllers.js";
// import { middlerares } from "../middlewares/routes.middlerares.js";


export default class ConsultasRoutes extends Routes {
    constructor() {
        super();
        this.controller = new ConsultaControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
        // .use(middlerares.routes.checkRoute)
            .get('/', this.controller.getConsultas)  
            .get('/next', this.controller.getNextConsultaId)          
            .get('/:id', this.controller.getConsultaById)
            .post('/', this.controller.addConsulta)
            .put('/', this.controller.modifyConsulta)
            .delete('/:id', this.controller.deleteConsulta)
    }
}

