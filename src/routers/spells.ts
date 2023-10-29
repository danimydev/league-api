import { Router } from "oak";

import { summonersSpells } from "@/data/summoners-spells.ts";

export const spellsRouter = new Router({ prefix: "/spells" })
  .get("/", (ctx) => {
    ctx.response.status = 200;
    ctx.response.body = summonersSpells;
    return;
  });
