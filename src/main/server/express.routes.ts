import { Express, Router } from "express";
import { candidatoRoutes } from "../../app/features/candidato/routes/candidato.routes";
import { loginRoutes } from "../../app/features/login/routes/login.routes";
import { recrutadorRoutes } from "../../app/features/recrutador/routes/recrutador.routes";

export const usuarioRoute = Router();

export const createRoutes = (app: Express) => {
    app.get('/', (req, res) => {
        return res.status(200).send({
            ok: true,
            message: "Deu certo!"
        })
    });

    app.use("/recrutador", recrutadorRoutes());
    app.use("/auth", loginRoutes());
    app.use("/candidato", candidatoRoutes());
}