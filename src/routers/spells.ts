import { Router } from 'oak';

import { SpellsRepository } from '@/repositories/spells.ts';

const spellsRouter = new Router({ prefix: '/spells' })
  .get('/', (ctx) => {
    ctx.response.status = 200;
    ctx.response.body = SpellsRepository.get();
    return;
  });

export default spellsRouter;
