import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get('/')
    obterUsuario(): string{
        return this.usuarioService.obterUsuario();
    }

    @Get('/cadastrar')
    cadastrarUsuario(): string{
        return 'Falta implementar e não será um Get'
    }


}
