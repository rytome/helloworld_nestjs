import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

    dados: Usuario[];
    
    constructor(){
        this.dados = [];
        this.dados.push(new Usuario('Alex', '123456789'));
        this.dados.push(new Usuario('Tiago', '333333333'));
    }

    obterUsuario(nome: string):string{
        return `Obtendo dados de ${nome} xxx`
    }

    listarUsuario():Usuario[]{
        return this.dados;
    }

    cadastrarUsuario(usuario: Usuario):string{
        this.dados.push(usuario);
        return `Usuário ${usuario.nome} cadastrado com sucesso`
    }
}
