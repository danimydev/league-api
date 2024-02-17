import { Router } from "oak";

import dataDragon from "@/services/data-dragon/index.ts";

export const championsRouter = new Router({ prefix: "/champions" })
  .get("/", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const lang = searchParams.get("lang");
      const version = searchParams.get("version");
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
      const lang = searchParams.get("lang");
      const version = searchParams.get("version");
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
  .get("/:championName/images", (ctx) => {
    const { searchParams } = ctx.request.url;
    const skin = searchParams.get("skin");
    const version = searchParams.get("version");
    const championName = ctx.params.championName;
    const championImages = dataDragon.getChampionImagesUrls({
      championName,
      skin,
      version,
    });
    ctx.response.status = 200;
    return ctx.response.body = {
      images: championImages,
    };
  });
