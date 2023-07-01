import { CHAMPIONS } from '../data/champions.ts';

export class ChampionsRepository {
	static get(filters: {
		tags: Array<string>;
		partype: Array<string>;
	}) {
		return CHAMPIONS.filter((c) => {
			let includesTag = false;
			let includesPartype = false;

			for (let i = 0; i < filters.tags.length; i++) {
				const desiredTag = filters.tags[i];
				if (c.tags.includes(desiredTag)) {
					includesTag = true;
				}
			}

			for (let i = 0; i < filters.partype.length; i++) {
				const desiredPartype = filters.partype[i];
				if (c.partype === desiredPartype) {
					includesPartype = true;
				}
			}

			return includesTag && includesPartype;
		});
	}

	static getById(id: string) {
		return CHAMPIONS.filter((c) => c.id === id);
	}
}
