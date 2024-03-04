import {
  GetAccountEndpointResponse,
  GetSummonersByNameEndpointResponse,
} from "@/services/riot-games/types.ts";
import { envConfig } from "@/env.ts";

const DEFAULT_REGION = "LA1";
const DEFAULT_ACCOUNT_REGION = "americas";
const API_KEY = envConfig.riotApiKey;

const getSummoner = async (args: {
  summonerName: string;
  region?: string | null;
}) => {
  const region = args.region || DEFAULT_REGION;
  const url = new URL(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      encodeURIComponent(args.summonerName)
    }`,
  );
  url.searchParams.set("api_key", API_KEY);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("response not ok from riot games services");
  }

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  const summoner = await response.json() as GetSummonersByNameEndpointResponse;

  if (!summoner) {
    throw new Error("summoner not found in riotgames response payload");
  }

  return summoner;
};

const getAccount = async (args: {
  gameName: string;
  tagLine: string;
  region?: string | null;
}) => {
  const region = args.region || DEFAULT_ACCOUNT_REGION;

  console.log({ API_KEY: API_KEY });

  const response = await fetch(
    `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${
      encodeURIComponent(args.gameName)
    }/${encodeURIComponent(args.tagLine)}`,
    {
      method: "GET",
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": API_KEY,
      },
    },
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("response not ok from riot games services");
  }

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  return await response.json() as GetAccountEndpointResponse;
};

export default {
  getSummoner,
  getAccount,
};
