import { Router } from "oak";

import { ImagesRepository } from "@/repositories/images.ts";

import dataDragon from "@/data-dragon/index.ts";

export const championsRouter = new Router({ prefix: "/champions" })
  .get("/", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const lang = searchParams.get("lang") || undefined;
      const version = searchParams.get("version") || undefined;
      const champions = await dataDragon.getChampions({ version, lang });
      ctx.response.status = 200;
      return ctx.response.body = {
        champions,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  })
  .get("/:championName", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const lang = searchParams.get("lang") || undefined;
      const version = searchParams.get("version") || undefined;
      const champion = await dataDragon.getChampion({
        version,
        lang,
        championName: ctx.params.championName,
      });
      ctx.response.status = 200;
      return ctx.response.body = {
        champion,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
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
