import { Controller, Get, Param } from '@nestjs/common';
import { ChampionsService } from './champions.service';

@Controller('champions')
export class ChampionsController {
  constructor(private championsService: ChampionsService) {}

  @Get()
  getChampions() {
    return this.championsService.getChampions();
  }

  @Get(':name')
  getChampionByName(@Param() params: { name: string }) {
    return this.championsService.getChampionByName(params.name);
  }
}
