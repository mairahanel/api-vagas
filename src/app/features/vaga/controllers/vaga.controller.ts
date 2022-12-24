import { Request, Response } from "express";
import { CacheRepository } from "../../../shared/repositories/cache.repository";
import { VagaRepository } from "../repositories/vaga.repository";
import { AplicarVagaUsecase } from "../usecases/aplicar-vaga.usecase";
import { CreateVagaUsecase } from "../usecases/create-vaga.usecase";
import { ListVagasRecrutadorUsecase } from "../usecases/list-vagas-recrutador.usecase";

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

    public async apply(req: Request, res: Response) {
        try {
            const { idCandidato, indSucesso } = req.body;
            const {idVaga} = req.params;

            const usecase = new AplicarVagaUsecase();
            const result = await usecase.execute({
                idCandidato,
                idVaga,
                indSucesso
            });

            if(!result) {
                return res.status(404).send({
                    ok: false,
                    message: "Usuário/vaga não encontrado"
                })
            }

            return res.status(201).send({
                ok: true,
                message: "Candidatura feita com sucesso",
                data: result
            })


        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            })
        }
    }

    public async list(req: Request, res: Response) {
        try {
            const { idRecrutador} = req.params;

            const usecase = new ListVagasRecrutadorUsecase(new VagaRepository, new CacheRepository);
            const result = await usecase.execute(idRecrutador);

            if(!result) {
                return res.status(404).send({
                    ok: false,
                    message: "Recrutador não encontrado"
                })
            }

            return res.status(200).send({
                ok: true,
                message: "Vagas do recrutador listadas com sucesso",
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