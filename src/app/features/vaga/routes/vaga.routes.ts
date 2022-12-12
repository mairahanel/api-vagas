import { Request, Response, Router } from "express"
import { checkLoginMiddleware } from "../../login/middlewares/check-login.middleware";
import { checkLoginRecrutadorMiddleware } from "../../recrutador/middlewares/check-login-recrutador.middleware";
import { VagaController } from "../controllers/vaga.controller";

export const vagaRoutes = () => {
    const router = Router();

    router.post("/", [checkLoginMiddleware, checkLoginRecrutadorMiddleware], new VagaController().create);

    return router;
}