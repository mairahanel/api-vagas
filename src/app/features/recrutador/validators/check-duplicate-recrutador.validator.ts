import { NextFunction, Request, Response } from "express";
import { GetRecrutadorUsecase } from "../usecases/get-recrutador.usecase";

export const checkDuplicateRecrutadorValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username } = req.body;

        const usecase = new GetRecrutadorUsecase();
        const result = await usecase.execute(username);

        if(result) {
            return res.status(400).send({
                ok: false,
                message: "Recrutador já existe"
            })
        }

        return next();

    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }
}