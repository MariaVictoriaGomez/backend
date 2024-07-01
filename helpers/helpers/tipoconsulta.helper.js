// users.helper.js

import TipoConsulta from '../../models/TipoConsulta.js'

export default class TipoConsultaHelpers {
    createTipoConsulta(data) {
        return new TipoConsulta(
            parseInt(data.idtipoconsulta || 1),
            data.descripcion,
            1
        );
    }
}
