import { CacheRepository } from "../../../shared/repositories/cache.repository";
import { VagaRepository } from "../repositories/vaga.repository";

export class ListVagasRecrutadorUsecase{
    constructor(private repository: VagaRepository, private cacheRepository: CacheRepository) {}

    public async execute(idRecrutador: string) {
        const cachedList = await this.cacheRepository.get(`vagas-recrutador-${idRecrutador}`);
        if(cachedList) {
            return cachedList;
        }

        const result = await this.repository.list(idRecrutador);

        if(result === null) {
            return null;
        }

        const resultJson = result.map(item => item.toJson());

        await this.cacheRepository.set(`vagas-recrutador-${idRecrutador}`, resultJson);

        return resultJson;
    }
}