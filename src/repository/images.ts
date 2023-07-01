export class ImageRepository {
	static async getSplash(championName: string, skin: number) {
		const url =
			`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin}.jpg`;
		const res = await fetch(url);
		return res;
	}

	static async getLoading(championName: string, skin: number) {
		const url =
			`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin}.jpg`;
		const res = await fetch(url);
		return res;
	}

	static async getSquare(championName: string) {
		const url =
			`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${championName}.png`;
		const res = await fetch(url);
		return res;
	}
}
