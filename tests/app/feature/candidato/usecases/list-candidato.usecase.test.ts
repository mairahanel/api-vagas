import { UserRepository } from '../../../../../src/app/features/user/repositories/user.repository';
import { ListCandidatosUsecase } from '../../../../../src/app/features/candidato/usecases/list-candidato.usecase'
import { CacheRepository } from '../../../../../src/app/shared/repositories/cache.repository';
import { DatabaseConnection } from '../../../../../src/main/database/typeorm.connection';

describe('ListCandidatoUsecase -', async () => {

    beforeAll(async () => {
        await DatabaseConnection.connect();
    });

    afterAll(async () => {
        
    })
    test('deve chamar o método find do UserRepository com os valores corretos', async () => {
        const repository = new UserRepository();
        const cacheRepository = new CacheRepository();
        const sut = new ListCandidatosUsecase(repository, cacheRepository);
    
        jest.spyOn(repository, 'find').mockResolvedValue([]);
        const observer = jest.spyOn(repository, 'find');
    
        await sut.execute();
    
        expect(observer).toHaveBeenCalledTimes(1);
        expect(observer).toHaveBeenCalledWith('C');
    });
})