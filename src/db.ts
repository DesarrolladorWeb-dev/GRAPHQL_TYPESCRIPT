import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";

export const connectDB = async () => {

    await createConnection ({
        type: "mysql",
        database: 'usersdb',
        username: 'root',
        password: '',
        host: 'localhost',
        port: 3306,
        // logging: true,
        synchronize: true,//revisa si exite entidades definidas si existe crea las tablas
        entities: [Users], //es para definir que tablas van a estar creadas dentro de mi base de datos
        ssl: false,
    })

}