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
  getHello2(    @Query('nome') nome:string, 
  @Query('sobrenome') sobrenome:string
  ): string {
    return this.appService.getHello2(nome, sobrenome);
  }

  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }
}
