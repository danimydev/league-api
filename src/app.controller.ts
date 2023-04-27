import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('champions')
  getChampions() {
    return this.appService.getChampions();
  }

  @Get('champions/:name')
  getChampionByName(@Param() params: { name: string }) {
    return this.appService.getChampionByName(params.name);
  }
}
