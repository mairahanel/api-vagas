import { Router } from "express"
import { CandidatoController } from "../controllers/candidato.controller";

export const candidatoRoutes = () => {
    const router = Router();

    router.post("/", new CandidatoController().create);

    return router;
}