import { Router } from 'oak';

import SPELLS from '@/data/summoners_spells.ts';

const spellsRouter = new Router({ prefix: '/spells' })
  .get('/', (ctx) => {
    ctx.response.status = 200;
    ctx.response.body = SPELLS;
    return;
  });

export default spellsRouter;
