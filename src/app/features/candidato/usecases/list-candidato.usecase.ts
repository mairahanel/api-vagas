import { UserRepository } from "../../user/repositories/user.repository";

export class ListCandidatosUsecase {
    public async execute() {
        const repository = new UserRepository();
        const result = await repository.find('C');

        return result.map(item => {
            return item.toJson();
        })
    }
}