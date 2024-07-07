const errorData = (req) => ({
    incompleteEndpoint: {
        error_code: 4,
        error_desc: 'Hubo un error en la solicitud a esta ruta',
        endpoint: req.url,
        method: req.method
    },
    userNotExist: {
        error_code: 3,
        error_desc: 'No existe el usuario',
    },
    notConnected: {
        error_code: 10,
        error_desc: 'Problema de conexión a DB'
    },
    unexpected: {
        error_code: 2,
        error_desc: 'Error desconocido'
    }
})

const errorController = (err, req, res, _) => {
    console.log('Estoy en el middleware de errores')

    const erroCode = parseInt(err.message)
    const error = errorData(req)

    res.status(500)

    switch (errorCode) {
        case 3:
            res.json(error.userNotExist)
            break;
        case 4:
            res.json(error.incompleteEndpoint)
            break;
        case 10:
            res.json(error.notConnected)
            break;
        case 2:
            res.json(error.unexpected)
            break;
    }
}

export { errorController };