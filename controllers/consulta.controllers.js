import ConsultasDaoMysql from '../dao/consulta.dao.mysql.js';
import ConsultasHelpers from '../helpers/helpers/consultas.helper.js';

export default class ConsultaControllers {

    constructor() {
        this.db = new ConsultasDaoMysql()
        this.helpers = new ConsultasHelpers();
    }

    getConsultas = async (req, res) => {
        const consultas = await this.db.getConsultas();
        res.json(consultas);
    }

    getConsultaById = async (req, res) => {
        const { id } = req.params
        const consulta = await this.db.getConsultaById(id)
        res.json(consulta)
    }

    getNextConsultaId = async (req, res) => {
        const nextId = await this.db.getNextConsultaId();
        console.log("Next Consulta ID: ", nextId); 
        res.json(nextId);
    }
    

    addConsulta = async (req, res) => {
        try {
            const { tiposConsulta, ...consultaData } = req.body;
            const newConsulta = this.helpers.createConsulta(consultaData);
            const result = await this.db.addConsulta(newConsulta);
    
            // if (Array.isArray(tiposConsulta)) {
            //     console.log("tiposConsulta = " + tiposConsulta)
            //     await Promise.all(tiposConsulta.map(async (idtipoconsulta) => {
            //         await this.db.addTipoxConsulta(newConsulta.idconsulta, idtipoconsulta);
            //     }));
            // }
    
            res.json({ success: true });
        } catch (error) {
            console.error('Error al agregar consulta:', error);
            res.json({ success: false });
        }
    }
    

    modifyConsulta = async (req, res) => {
        const modifiedConsulta = this.helpers.createConsulta(req.body)
        const result = await this.db.modifyConsulta(modifiedConsulta)
        res.json(result)
    }

    deleteConsulta = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteConsulta(id)
        res.json(result);
    }
}
