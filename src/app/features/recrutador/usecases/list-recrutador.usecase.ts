import { CacheRepository } from "../../../shared/repositories/cache.repository";
import { UserRepository } from "../../user/repositories/user.repository";

export class ListRecrutadorUseCase {
    constructor(
        private repository: UserRepository,
        private cacheRepository: CacheRepository
    ){}

    public async execute() {
        //const repository = new UserRepository();
        const cachedList = await this.cacheRepository.get("recrutadores");
        if(cachedList) {
            return {
                cache: true,
                data: cachedList
            }
        }

        const result = await this.repository.find('R');

        const resultJson = result.map(item => {
            return item.toJson();
        });

        await this.cacheRepository.set("recrutadores", result);

        return resultJson;
    }
}