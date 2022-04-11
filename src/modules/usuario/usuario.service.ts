import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {

    dados: string[];
    
    constructor(){
        this.dados = ['Alex', 'Tiago'];
    }

    obterUsuario(nome: string):string{
        return `Obtendo dados de ${nome} xxx`
    }

    listarUsuario():string[]{
        return this.dados;
    }

    cadastrarUsuario(nome: string):string{
        this.dados.push(nome);
        return `Usuário ${nome} cadastrado com sucesso`
    }
}
