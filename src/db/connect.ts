import { createConnection } from "typeorm";

export const connection = createConnection().then((connection) => {
    console.log("O banco foi conectado!")
    return connection
})