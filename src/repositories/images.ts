export class ImageRepository {
	static async getSplash(
		{ championName, skin }: { championName: string; skin: string },
	) {
		const url =
			`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin}.jpg`;
		const res = await fetch(url);
		return res.text();
	}

	static async getLoading(
		{ championName, skin }: { championName: string; skin: string },
	) {
		const url =
			`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin}.jpg`;
		const res = await fetch(url);
		return res.text();
	}

	static async getSquare({ championName }: { championName: string }) {
		const url =
			`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${championName}.png`;
		const res = await fetch(url);
		return res.text();
	}
}