import { Request, Response, Router } from "express"
import { checkLoginMiddleware } from "../../login/middlewares/check-login.middleware";
import { RecrutadorController } from "../controllers/recrutador.controller";
import { checkLoginRecrutadorMiddleware } from "../middlewares/check-login-recrutador.middleware";
import { checkDuplicateRecrutadorValidator } from "../validators/check-duplicate-recrutador.validator";
import { createRecrutadorValidator } from "../validators/create-recrutador.validator";

export const recrutadorRoutes = () => {
    const router = Router();

    router.post("/", [createRecrutadorValidator, checkDuplicateRecrutadorValidator], new RecrutadorController().create);
    router.get("/",  new RecrutadorController().list);

    return router;
}