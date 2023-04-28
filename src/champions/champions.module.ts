import { Module } from '@nestjs/common';
import { ChampionsController } from './champions.controller';
import { ChampionsService } from './champions.service';

@Module({
  imports: [],
  controllers: [ChampionsController],
  providers: [ChampionsService],
})
export class ChampionsModule {}
