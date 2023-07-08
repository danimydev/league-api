import { CHAMPIONS } from '../data/champions.ts';

export class ChampionsRepository {
	static get(filters: {
		tags: Array<string>;
		partypes: Array<string>;
	}) {
		return CHAMPIONS.filter((c) => {
			let includesTag = filters.tags.length === 0;
			let includesPartypes = filters.partypes.length === 0;

			for (let i = 0; i < filters.tags.length; i++) {
				const desiredTag = filters.tags[i];
				if (c.tags.includes(desiredTag)) {
					includesTag = true;
				}
			}

			for (let i = 0; i < filters.partypes.length; i++) {
				const desiredPartype = filters.partypes[i];
				if (c.partype === desiredPartype) {
					includesPartypes = true;
				}
			}

			return includesTag && includesPartypes;
		});
	}

	static getById(id: string) {
		return CHAMPIONS.filter((c) => c.id === id);
	}
}