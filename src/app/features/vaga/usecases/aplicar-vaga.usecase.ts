import { CandidaturaModel } from "../../../models/candidatura.model";
import { CandidaturaRepository } from "../../candidatura/repositories/candidatura.repository";
import { UserRepository } from "../../user/repositories/user.repository";
import { VagaRepository } from "../repositories/vaga.repository";

interface AplicarVagaDTO {
    idCandidato: string;
    idVaga: string;
    indSucesso: boolean;
}

export class AplicarVagaUsecase {
    public async execute(data: AplicarVagaDTO) {
        const vagaRepository = new VagaRepository();
        const userRepositoy = new UserRepository();
        
        const candidato = await userRepositoy.get(data.idCandidato);
        if(!candidato) {
            return null;
        }

        const vaga = await vagaRepository.find(data.idVaga);
        if(!vaga) {
            return null;
        }

        const candidaturaRepository = new CandidaturaRepository();

        //verificar se usuário já está na vaga
        const usuarioVaga = await candidaturaRepository.get(
            data.idCandidato,
            data.idVaga
        );
        if(usuarioVaga) {
            throw new Error("Candidato já está aplicado nessa vaga")
        }

        if(!vaga.indAtivo) {
            throw new Error("A vaga não está ativa");
        }

        if(vaga.dtLimite < new Date()) {
            throw new Error("A vaga não está mais aceitando candidaturas");
        }

        const candidatura = new CandidaturaModel(candidato, vaga, data.indSucesso, new Date());

        const result = await candidaturaRepository.create(candidatura);

        return result.toJson();
    }
}