import { v4 as createUuid } from 'uuid';
import { UsuarioModel } from './usuario.model';

export class VagaModel {

    private _id: string;

    constructor (
        private _descricao: string,
        private _empresa: string,
        private _dtLimite: Date,
        private _indAtivo: boolean,
        private _recrutador: UsuarioModel,
        private _maxCandidatos?: number
    ) {
        this._id = createUuid();
    }

    public get id() {
        return this._id;
    }

    public get descricao() {
        return this._descricao;
    }

    public set descricao(descricao: string) {
        this._descricao = descricao;
    }

    public get empresa() {
        return this._empresa;
    }

    public set empresa(empresa: string) {
        this._empresa = empresa;
    }

    public get dtLimite() {
        return this._dtLimite;
    }

    public set dtLimite(data: Date) {
        this._dtLimite = data;
    }

    public get indAtivo() {
        return this._indAtivo;
    }

    public set indAtivo(indAtivo: boolean) {
        this._indAtivo = indAtivo;
    }

    public get recrutador() {
        return this._recrutador;
    }

    public set recrutador(recrutador: UsuarioModel) {
        this._recrutador = recrutador;
    }

    public get maxCandidatos(): number | undefined {
        return this._maxCandidatos;
    }

    public set maxCandidatos(max: number | undefined) {
        this._maxCandidatos = max;
    }

    public toJson() {
        return {
            id: this._id,
            descricao: this._descricao,
            empresa: this._empresa,
            dtLimite: this._dtLimite,
            indAtivo: this._indAtivo,
            maxCandidatos: this._maxCandidatos
        }
    }

    public static create(
        id: string,
        descricao: string,
        empresa: string,
        dtLimite: Date,
        indAtivo: boolean,
        recrutador: UsuarioModel,
        maxCandidatos?: number
    ) {
        const vaga = new VagaModel(descricao, empresa, dtLimite, indAtivo, recrutador, maxCandidatos);
        vaga._id = id;

        return vaga;
    }
}