import { DataSource } from "typeorm";
import { appEnv } from "../../app/envs/app.env";
import 'reflect-metadata';

export default new DataSource ({
    type: "postgres",
    url: appEnv.databaseURL,
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: false,
    schema: "public",
    entities: ["src/app/shared/entities/**/*.ts"],  
    migrations: ["src/app/shared/migrations/**/*.ts"]
})