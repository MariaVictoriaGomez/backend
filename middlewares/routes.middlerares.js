// const checkRoute = (req, res, next) => {
//     if(req.method === 'GET' && req.url.lenght > 1)
//         return res.json({
//             error_code: 1 ,
//             error_desc:'Ruta no implementada',
//             endpoint: req.originalUrl,
//             method: req.method
//         })

//         next()
// }


// export const middlerares = {
//     checkParams,
//     checkRoute
// }