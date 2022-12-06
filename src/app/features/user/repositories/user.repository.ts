import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { UsuarioModel } from "../../../models/usuario.model";
import { UserEntity } from "../../../shared/entities/user.entity";

export class UserRepository {
    private repository = DatabaseConnection.connection.getRepository(UserEntity);

    public async create(user: UsuarioModel) {
        const UserEntity = this.repository.create({
            id: user.id,
            nome: user.nome,
            username: user.username,
            senha: user.senha,
            tipo: user.tipo,
            empresa: user.empresa
        });

        const result = await this.repository.save(UserEntity);

        return this.mapEntityToModel(result);
    }

    private mapEntityToModel(userEntity: UserEntity) {
        const user = UsuarioModel.create(
            userEntity.id,
            userEntity.nome,
            userEntity.username,
            userEntity.senha,
            userEntity.tipo,
            userEntity.empresa
        );

        return user;
    }
}