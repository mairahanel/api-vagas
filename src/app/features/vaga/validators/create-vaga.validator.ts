import { NextFunction, Request, Response } from "express";

export const createVagaValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { descricao, empresa, dtLimite, indAtivo, idRecrutador} = req.body;

        if(!descricao) {
            return res.status(400).send({
                ok: false,
                message: "Descrição não informada"
            })
        }

        if(!empresa) {
            return res.status(400).send({
                ok: false,
                message: "Empresa não informada"
            })
        }

        if(!dtLimite) {
            return res.status(400).send({
                ok: false,
                message: "Data limite não informada"
            })
        }

        if(!indAtivo) {
            return res.status(400).send({
                ok: false,
                message: "Indicador ativo não informado"
            })
        }

        if(!idRecrutador) {
            return res.status(400).send({
                ok: false,
                message: "ID do recrutador não informado"
            })
        }

        next();

    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        })
    }
}