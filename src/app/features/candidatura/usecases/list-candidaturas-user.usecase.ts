import { CandidaturaRepository } from "../repositories/candidatura.repository";

export class ListCandidaturasUserUsecase {
    constructor(private repository: CandidaturaRepository) {}

    public async execute(id: string) {
        const result = await this.repository.list(id);

        if(result === null) {
            return null;
        }

        const resultJson = result.map((item) => item.toJson());

        return resultJson;
    }
}