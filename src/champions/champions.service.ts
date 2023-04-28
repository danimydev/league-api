import { Injectable } from '@nestjs/common';
import { CHAMPIONS, CHAMPIONS_OBJECT, Champion } from '../data/champions';

@Injectable()
export class ChampionsService {
  getChampions() {
    return CHAMPIONS;
  }

  getChampionByName(name: string): Champion {
    return CHAMPIONS_OBJECT[name];
  }
}
