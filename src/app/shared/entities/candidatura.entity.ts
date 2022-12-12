import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { VagaEntity } from "./vaga.entity";

@Entity({
    name: "candidatura"
})
export class CandidaturaEntity {
    @PrimaryColumn({
        name: "id_candidato"
    })
    idCandidato: string;

    @PrimaryColumn({
        name: "id_vaga"
    })
    idVaga: string;

    @Column({
        name: "ind_sucesso"
    })
    indSucesso: boolean;

    @Column({
        name: "dt_candidatura"
    })
    dtCandidatura: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({
        name: "id_candidato"
    })
    candidato: UserEntity;

    @ManyToOne(() => VagaEntity)
    @JoinColumn({
        name: "id_vaga"
    })
    vaga: VagaEntity;
}