import { CandidatoModel } from "../../../models/candidato.model"
import { UserRepository } from "../../user/repositories/user.repository";

interface CreateCandidatoDTO {
    nome: string,
    username: string,
    senha: string,
    empresa?: string 
}

export class CreateCandidatoUsecase {
    public async execute(data: CreateCandidatoDTO) {
        const candidato = new CandidatoModel(
            data.nome,
            data.username,
            data.senha,
            data.empresa
        );

        const repository = new UserRepository();
        const result = await repository.create(candidato);

        return result.toJson();
    }
}