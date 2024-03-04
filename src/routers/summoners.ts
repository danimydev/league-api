import { Router } from "oak";

import riotGames from "@/services/riot-games/index.ts";
import dataDragon from "@/services/data-dragon/index.ts";

export const summonersRouter = new Router({ prefix: "/summoners" })
  .get("/account", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const region = searchParams.get("region");
      const gameName = searchParams.get("game_name");
      const tagLine = searchParams.get("tag_line");

      if (!gameName || !tagLine) {
        ctx.response.status = 400;
        return ctx.response.body = {
          error: "gameName and tagLine are required",
        };
      }

      const account = await riotGames.getAccount({
        gameName,
        region,
        tagLine,
      });

      ctx.response.status = 200;
      return ctx.response.body = {
        account,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  })
  .get("/:summonerName", async (ctx) => {
    try {
      const { summonerName } = ctx.params;
      const { searchParams } = ctx.request.url;
      const region = searchParams.get("region");

      const summoner = await riotGames.getSummoner({
        region,
        summonerName,
      });

      const profileIcon = dataDragon.getProfileIcon({
        id: summoner.profileIconId.toString(),
      });

      ctx.response.status = 200;
      return ctx.response.body = {
        summoner: {
          id: summoner.id,
          accountId: summoner.accountId,
          puuid: summoner.puuid,
          name: summoner.name,
          level: summoner.summonerLevel,
          profileIcon,
        },
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  });
