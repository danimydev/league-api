export type GetSummonersByNameEndpointResponse = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export type GetAccountEndpointResponse = {
  puuid: string;
  gameName: string;
  tagLine: string;
};
