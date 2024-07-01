import TipoConsultaDaoMysql from '../dao/tipoconsulta.dao.mysql.js';
import TipoConsultaHelpers from '../helpers/helpers/tipoconsulta.helper.js';

export default class TipoConsultaControllers {

    constructor() {
        this.db = new TipoConsultaDaoMysql()
        this.helpers = new TipoConsultaHelpers();
    }

    getTipoConsulta = async (req, res) => {
        const tiposconsulta = await this.db.getTipoConsulta();
        res.json(tiposconsulta);
    }

    getTipoConsultaById = async (req, res) => {
        const { id } = req.params;
        const tipoconsulta = await this.db.getTipoConsultaById(id);
        res.json(tipoconsulta);
    }
    
}
