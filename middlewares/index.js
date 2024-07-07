// export { middlewares as filesMiddlerare } from "../files/files.middlewares.js";
// export { middlewares as routesMiddleware } from './routes.middlewares.js';
import { middlewares as files } from "../files/files.middlewares.js";
import { middlewares as routes } from "./routes.middlerares.js";
import { middlewares as errors } from './errors.middlewares.js';

export const middlerares = {
    files,
    routes,
    errors
}
