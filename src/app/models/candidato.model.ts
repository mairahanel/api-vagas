import { UsuarioModel } from "./usuario.model";

export class CandidatoModel extends UsuarioModel {

    constructor(
        nome: string,
        username: string,
        senha: string,
        empresa?: string
    ){
        super(nome, username, senha, "C", empresa);
    }
}