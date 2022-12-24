import { Request, Response } from "express";
import { CandidaturaRepository } from "../repositories/candidatura.repository";
import { ListCandidaturasUserUsecase } from "../usecases/list-candidaturas-user.usecase";

export class CandidaturaController {
    public async list(req: Request, res: Response) {
        try {
            const { idCandidato } = req.params;

            const usecase = new ListCandidaturasUserUsecase(new CandidaturaRepository);
            const result = await usecase.execute(idCandidato);

            if(!result) {
                return res.status(404).send({
                    ok: false,
                    message: "Candidato não encontrado"
                });
            }

            return res.status(200).send({
                ok: true,
                message: "Candidaturas listadas com sucesso",
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