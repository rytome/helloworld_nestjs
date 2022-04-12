import { Controller, Get, Query } from '@nestjs/common';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get('/')
    obterUsuario(@Query('nome') nome:string): string{
        return this.usuarioService.obterUsuario(nome);
    }

    @Get('/listar')
    listarUsuario(): Usuario[]{
        return this.usuarioService.listarUsuario();
    }

    @Get('/cadastrar')
    cadastrarUsuario(@Query() usuario: Usuario): string{
        return this.usuarioService.cadastrarUsuario(usuario);
    }


}
