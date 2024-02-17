import { Router } from "oak";

import riotGames from "@/services/riot-games/index.ts";

export const summonersRouter = new Router({ prefix: "/summoners" })
  .get("/:summonerName", async (ctx) => {
    try {
      const { summonerName } = ctx.params;
      const { searchParams } = ctx.request.url;
      const region = searchParams.get("region");
      const apiKey = ctx.request.headers.get("api_key");

      if (!apiKey) {
        ctx.response.status = 400;
        return ctx.response.body = {
          error: "api key not sent",
        };
      }

      return ctx.response.body = await riotGames.getSummoner({
        apiKey,
        region,
        summonerName,
      });
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  });
