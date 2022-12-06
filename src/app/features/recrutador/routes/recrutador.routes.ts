import { Router } from "express"
import { RecrutadorController } from "../controllers/recrutador.controller";
import { createRecrutadorValidator } from "../validators/create-recrutador.validator";

export const recrutadorRoutes = () => {
    const router = Router();

    router.post("/", [createRecrutadorValidator], new RecrutadorController().create);

    return router;
}