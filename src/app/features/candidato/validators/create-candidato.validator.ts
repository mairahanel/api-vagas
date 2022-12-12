import { NextFunction, Request, Response } from "express";

export const createCandidatoValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {nome, username, senha } = req.body;

        if(!nome) {
            return res.status(400).send({
                ok: false,
                message: "Nome não informado"
            })
        }

        if(!username) {
            return res.status(400).send({
                ok: false,
                message: "Username não informado"
            })
        }

        if(!senha) {
            return res.status(400).send({
                ok: false,
                message: "Senha não informada"
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