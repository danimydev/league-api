import { Router } from 'oak';

import { ImagesRepository } from "@/repositories/images.ts";

const imagesRouter = new Router({ prefix: '/images' })
  .get('/icons/:iconId', (ctx) => {
    const { iconId } = ctx.params;
    return ctx.response.body = ImagesRepository.getIconUrlById(iconId);
  })
  .get('/spells/:spellName', (ctx) => {
    const { spellName } = ctx.params;
    return ctx.response.body = ImagesRepository.getSpellUrlByName(spellName);
  });

export default imagesRouter;
