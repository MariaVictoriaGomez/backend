import Server from "./server/Server.js";

Server.run(process.env.PORT || 3306);

console.log(process.env);