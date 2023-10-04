import { spells } from '../data/summoners_spells.ts';

export class SpellsRepository {
  static get() {
    return spells;
  }
}
