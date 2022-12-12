import { Request, Response } from "express";
import { CreateVagaUsecase } from "../usecases/create-vaga.usecase";

export class VagaController {
    public async create(req: Request, res: Response) {
        try {
            const { descricao, empresa, dtLimite, indAtivo, maxCandidatos, idRecrutador } = req.body;

            const usecase = new CreateVagaUsecase();
            const result = await usecase.execute({
                descricao,
                empresa,
                dtLimite,
                indAtivo,
                maxCandidatos,
                idRecrutador
            });

            if(!result) {
                res.status(404).send({
                    ok: false,
                    message: "O recrutador não existe"
                })
            }

            return res.status(201).send({
                ok: true,
                message: "Vaga criada com sucesso",
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