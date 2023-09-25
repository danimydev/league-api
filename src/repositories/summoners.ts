type Summoner = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export class SummonersRepository {
  static async getSummonerByName(
    args: {
      region: string;
      apiKey: string;
      summonerName: string;
    },
  ): Promise<Summoner> {
    const url = new URL(
      `https://${args.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
        encodeURIComponent(args.summonerName)
      }`,
    );
    url.searchParams.set('api_key', args.apiKey);
    const response = await fetch(url);
    return await response.json() as Summoner;
  }
}
