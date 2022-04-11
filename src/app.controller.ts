import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  getHello2(): string {
    return this.appService.getHello2();
  }

  @Get('/bye')
  getBye(
    @Query('nome') nome:string, 
    @Query('sobrenome') sobrenome:string
    ): string {
    return 'Tchau ' + nome + ' ' + sobrenome;
  }
}
