import Utils from "@/data-dragon/utils.ts";
import { ChampionsEndpointResponse } from "@/data-dragon/types.ts";

const BASE_URL = "https://ddragon.leagueoflegends.com";
const DEFAULT_VERSION = "14.3.1";
const DEFAULT_LANG = "en_US";

const getVersions = async () => {
  const response = await fetch(
    `${BASE_URL}/api/versions.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  const versions = await response.json() as string[];
  if (!versions) {
    throw new Error("versions not found in ddragon response payload");
  }

  return versions;
};

const getLanguages = async () => {
  const response = await fetch(
    `${BASE_URL}/cdn/languages.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  const languagues = await response.json() as string[];
  if (!languagues) {
    throw new Error("languages not found in ddragon response payload");
  }

  return languagues;
};

const getChampions = async ({
  version = DEFAULT_VERSION,
  lang = DEFAULT_LANG,
}: {
  version?: string;
  lang?: string;
}) => {
  const response = await fetch(
    `${BASE_URL}/cdn/${version || DEFAULT_VERSION}/data/${
      lang || DEFAULT_LANG
    }/champion.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  const champions = await response.json() as ChampionsEndpointResponse;
  if (!champions) {
    throw new Error("champions not found in ddragon response payload");
  }

  return champions;
};

const getChampion = async ({
  version = DEFAULT_VERSION,
  lang = DEFAULT_LANG,
  championName,
}: {
  version?: string;
  lang?: string;
  championName: string;
}) => {
  const response = await fetch(
    `${BASE_URL}/cdn/${version}/data/${lang}/champion/${
      Utils.getNormalizedChampionName(championName.trim())
    }.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }

  const champion = await response.json() as ChampionsEndpointResponse;
  if (!champion) {
    throw new Error("champion not found in ddragon response payload");
  }

  return champion;
};

export default {
  getVersions,
  getLanguages,
  getChampions,
  getChampion,
};
