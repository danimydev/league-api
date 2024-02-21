import { Router } from "oak";

import dataDragon from "@/services/data-dragon/index.ts";

export const championsRouter = new Router({ prefix: "/champions" })
  .get("/", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const lang = searchParams.get("lang");
      const version = searchParams.get("version");
      const champions = await dataDragon.getChampions({ version, lang });
      const formattedChampions = Object.values(champions.data).map((c) => {
        return {
          id: c.id,
          name: c.name,
          title: c.title,
          images: dataDragon.getChampionImagesUrls({
            championName: c.id,
            skin: "0",
            version,
          }),
          tags: c.tags,
          partype: c.partype,
        };
      });
      ctx.response.status = 200;
      return ctx.response.body = {
        type: champions.type,
        version: champions.version,
        data: formattedChampions,
      };
    } catch (error) {
      ctx.response.status = 500;
      console.log(error);
      return ctx.response.body = {
        error: "Internal Server Error",
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
      const formattedChampion = Object.values(champion.data).map((c) => {
        return {
          id: c.id,
          name: c.name,
          title: c.title,
          images: dataDragon.getChampionImagesUrls({
            championName: c.id,
            skin: "0",
            version,
          }),
          skins: c.skins.map((s) => ({
            ...s,
            images: dataDragon.getChampionImagesUrls({
              championName: c.name,
              skin: s.num.toString(),
              version,
            }),
          })),
          lore: c.lore,
          blurb: c.blurb,
          allytips: c.allytips,
          enemyTips: c.enemytips,
          tags: c.tags,
          partype: c.partype,
          info: c.info,
          stats: c.stats,
          passive: {
            name: c.passive.name,
            description: c.passive.description,
            image: {
              ext: "png",
              url: dataDragon.getPassiveUrl({
                filename: c.passive.image.full,
                version,
              }),
            },
          },
        };
      }).at(0);
      ctx.response.status = 200;
      return ctx.response.body = {
        type: champion.type,
        version: champion.version,
        data: formattedChampion,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  });
