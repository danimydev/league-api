import { Router } from "oak";

import { ChampionsRepository } from "@/repositories/champions.ts";
import { ImagesRepository } from "@/repositories/images.ts";

export const championsRouter = new Router({ prefix: "/champions" })
  .get("/", (ctx) => {
    const { searchParams } = ctx.request.url;
    const tags = (searchParams.get("tags") || "").split(/ /g);
    const partypes = (searchParams.get("partypes") || "").split(/ /g);
    return ctx.response.body = ChampionsRepository.get({
      tags: tags.at(0) !== "" ? tags : [],
      partypes: partypes.at(0) !== "" ? partypes : [],
    });
  })
  .get("/:id", (ctx) => {
    return ctx.response.body = ChampionsRepository.getById(ctx.params.id);
  })
  .get("/:id/images", (ctx) => {
    const { searchParams } = ctx.request.url;
    const skinNumber = searchParams.get("skinNumber") || "0";
    return ctx.response.body = [
      ImagesRepository.getLoading({
        championName: ctx.params.id,
        skin: skinNumber,
      }),
      ImagesRepository.getSplash({
        championName: ctx.params.id,
        skin: skinNumber,
      }),
      ImagesRepository.getSquare({
        championName: ctx.params.id,
      }),
    ];
  });
