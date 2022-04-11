import { Controller, Get, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get('/')
    obterUsuario(@Query('nome') nome:string): string{
        return this.usuarioService.obterUsuario(nome);
    }

    @Get('/listar')
    listarUsuario(): string[]{
        return this.usuarioService.listarUsuario();
    }

    @Get('/cadastrar')
    cadastrarUsuario(@Query('nome') nome:string): string{
        return this.usuarioService.cadastrarUsuario(nome);
    }


}
