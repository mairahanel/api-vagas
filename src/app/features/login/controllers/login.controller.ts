import { Request, Response } from "express";
import { LoginUsecase } from "../usecases/login.usecase";

export class LoginController {
    public async login(req: Request, res: Response) {
        try {
            const { username, senha } = req.body;

            const usecase = new LoginUsecase();
            const result = await usecase.execute({
                username, 
                senha
            });

            if(!result) {
                return res.status(401).send({
                    ok: false,
                    message: "Erro ao realizar login. Verifique username e senha"
                });
            }

            return res.status(200).send({
                ok: true, 
                message: "Login feito com sucesso",
                data: result
            });

        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            })
        }
    }
}