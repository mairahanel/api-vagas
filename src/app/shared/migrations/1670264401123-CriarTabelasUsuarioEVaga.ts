import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelasUsuarioEVaga1670264401123 implements MigrationInterface {
    name = 'CriarTabelasUsuarioEVaga1670264401123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" character varying NOT NULL, "nome" character varying(60) NOT NULL, "username" character varying(20) NOT NULL, "senha" character varying NOT NULL, "tipo" character varying(1) NOT NULL, "empresa" character varying(60), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6ccff37176a6978449a99c82e10" UNIQUE ("username"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vaga" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, "empresa" character varying NOT NULL, "dt_limite" TIMESTAMP NOT NULL, "ind_ativo" boolean NOT NULL, "id_recrutador" character varying NOT NULL, "max_candidatos" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8fc4878a1eec234441d6696c3cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vaga" ADD CONSTRAINT "FK_f0d9366b1d9aa1f307cfdfdac6b" FOREIGN KEY ("id_recrutador") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vaga" DROP CONSTRAINT "FK_f0d9366b1d9aa1f307cfdfdac6b"`);
        await queryRunner.query(`DROP TABLE "vaga"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
