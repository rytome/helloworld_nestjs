import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {

    obterUsuario():string{
        return 'Obter usuário'
    }

}
