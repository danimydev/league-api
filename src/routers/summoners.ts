import { Router } from "oak";

import { SummonersRepository } from "@/repositories/summoners.ts";

const summonersRouter = new Router({ prefix: "/summoners" })
  .get("/:summonerName", async (ctx) => {
    const { summonerName } = ctx.params;
    const { searchParams } = ctx.request.url;
    const region = searchParams.get("region") || "LA1";
    const apiKey = ctx.request.headers.get("api_key") || "";
    return ctx.response.body = await SummonersRepository.getSummonerByName({
      apiKey,
      region,
      summonerName,
    });
  });

export default summonersRouter;
