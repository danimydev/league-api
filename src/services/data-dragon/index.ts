import Utils from "@/services/data-dragon/utils.ts";

import {
  ChampionsEndpointResponse,
  ProfileIconsEndpointResponse,
} from "@/services/data-dragon/types.ts";

const BASE_URL = "https://ddragon.leagueoflegends.com";
const DEFAULT_VERSION = "14.3.1";
const DEFAULT_LANG = "en_US";
const DEFAULT_SKIN = "0";

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

const getChampions = async (args: {
  version?: string | null;
  lang?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;
  const lang = args.lang || DEFAULT_LANG;

  const response = await fetch(
    `${BASE_URL}/cdn/${version}/data/${lang}/champion.json`,
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

const getChampion = async (args: {
  championName: string;
  version?: string | null;
  lang?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;
  const lang = args.lang || DEFAULT_LANG;

  const response = await fetch(
    `${BASE_URL}/cdn/${version}/data/${lang}/champion/${
      Utils.getNormalizedChampionName(args.championName.trim())
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

const getChampionImagesUrls = (args: {
  championName: string;
  skin?: string | null;
  version?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;
  const skin = args.skin || DEFAULT_SKIN;
  const championName = Utils.getNormalizedChampionName(
    args.championName.trim(),
  );

  return {
    splash: {
      ext: "image/jpg",
      url: `${BASE_URL}/cdn/img/champion/splash/${championName}_${skin}.jpg`,
    },
    loading: {
      ext: "image/jpg",
      url: `${BASE_URL}/cdn/img/champion/loading/${championName}_${skin}.jpg`,
    },
    square: {
      ext: "image/png",
      url: `${BASE_URL}/cdn/${version}/img/champion/${championName}.png`,
    },
  };
};

const getProfileIcons = async (args: {
  version?: string | null;
  lang?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;
  const lang = args.lang || DEFAULT_LANG;

  const response = await fetch(
    `${BASE_URL}/cdn/${version}/data/${lang}/profileicon.json`,
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

  const profileIcons = await response.json() as ProfileIconsEndpointResponse;
  if (!profileIcons) {
    throw new Error("profile icons not found in ddragon response payload");
  }

  return profileIcons;
};

const getProfileIcon = (args: {
  id: string;
  version?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;

  return {
    id: args.id,
    version,
    ext: "image/png",
    url: `${BASE_URL}/cdn/${version}/img/profileicon/${args.id}.png`,
  };
};

const getSpriteUrl = (args: {
  filename: string;
  version?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;
  return `${BASE_URL}/cdn/${version}/img/sprite/${args.filename}`;
};

const getPassiveUrl = (args: {
  filename: string;
  version?: string | null;
}) => {
  const version = args.version || DEFAULT_VERSION;
  return `${BASE_URL}/cdn/${version}/img/passive/${args.filename}`;
};

export default {
  getVersions,
  getLanguages,
  getChampions,
  getChampion,
  getChampionImagesUrls,
  getProfileIcons,
  getProfileIcon,
  getSpriteUrl,
  getPassiveUrl,
};
