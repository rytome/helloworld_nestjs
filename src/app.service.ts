import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(nome: string, sobrenome:string): string {
    return `Hello ${nome} ${sobrenome} !`;
  }

  getBye(): string {
    return 'Bye!';
  }
}
