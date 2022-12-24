import { Router } from "express"
import { CandidaturaController } from "../controllers/candidatura.controller";

export const candidaturaRoutes = () => {
    const router = Router();

    router.get("/:idCandidato", new CandidaturaController().list);

    return router;
}