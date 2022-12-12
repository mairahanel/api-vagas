import { NextFunction, Request, Response } from "express";

export const checkLoginCandidatoMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const userHeader = req.headers["user"];

        if(!userHeader) {
            return res.status(401).send({
                ok: false,
                message: "Token não informado"
            })
        }

        const user = JSON.parse(userHeader.toString());

        if(user.tipo !== "C") {
            return res.status(403).send({
                ok: false,
                message: "Usuário deve ser candidato"
            });
        }

        req.body = {
            ...req.body,
            idCandidato: user.id
        }

        return next();

    } catch (error: any) {
        return res.status(401).send({
            ok: false,
            message: "Token inválido"
        })
    }
}