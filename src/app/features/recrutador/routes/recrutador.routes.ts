import { Request, Response, Router } from "express"
import { checkLoginMiddleware } from "../../login/middlewares/check-login.middleware";
import { RecrutadorController } from "../controllers/recrutador.controller";
import { checkLoginRecrutadorMiddleware } from "../middlewares/check-login-recrutador.middleware";
import { createRecrutadorValidator } from "../validators/create-recrutador.validator";

export const recrutadorRoutes = () => {
    const router = Router();

    router.post("/", [createRecrutadorValidator], new RecrutadorController().create);
    router.get("/",  new RecrutadorController().list);

    router.post("/vaga", [checkLoginMiddleware, checkLoginRecrutadorMiddleware], (req: Request, res: Response) => {
        return res.send({
            message: "vaga criada"
        })
    });


    return router;
}