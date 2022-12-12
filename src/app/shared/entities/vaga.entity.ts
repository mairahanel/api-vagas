import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { CandidaturaEntity } from "./candidatura.entity";
import { UserEntity } from "./user.entity";

@Entity({
    name: "vaga"
})
export class VagaEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    descricao: string;

    @Column()
    empresa: string;

    @Column({
        name: "dt_limite"
    })
    dtLimite: Date;

    @Column({
        name: "ind_ativo"
    })
    indAtivo: boolean;

    @Column({
        name: "id_recrutador"
    })
    idRecrutador: string;

    @Column({
        name: "max_candidatos",
        nullable: true
    })
    maxCandidatos: number;

    @CreateDateColumn({
        name: "created_at"
    })
    create: Date;

    @UpdateDateColumn({
        name: "updated_at"
    })
    update: Date;

    @ManyToOne(() => UserEntity, {
        eager: true
    })
    @JoinColumn({
        name: "id_recrutador"
    })
    recrutador: UserEntity;

}