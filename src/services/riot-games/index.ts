import { SummonersByNameEndpointResponse } from "@/services/riot-games/types.ts";

const DEFAULT_REGION = "LA1";

const getSummoner = async (args: {
  summonerName: string;
  apiKey: string;
  region?: string | null;
}) => {
  const region = args.region || DEFAULT_REGION;
  const url = new URL(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      encodeURIComponent(args.summonerName)
    }`,
  );
  url.searchParams.set("api_key", args.apiKey);

  const response = await fetch(url);

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  const summoner = await response.json() as SummonersByNameEndpointResponse;
  if (!summoner) {
    throw new Error("summoner not found in riotgames response payload");
  }

  return summoner;
};

export default { getSummoner };
