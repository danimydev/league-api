import { Application, Router } from 'oak';
import {
	ChampionsRepository,
	ImagesRepository,
	SummonersRepository,
} from './repositories/index.ts';
import REGIONS from './data/regions.ts';

const championsRouter = new Router()
	.get('/champions', (ctx) => {
		const { searchParams } = ctx.request.url;
		const tags = (searchParams.get('tags') || '').split(/ /g);
		const partypes = (searchParams.get('partypes') || '').split(/ /g);
		return ctx.response.body = ChampionsRepository.get({
			tags: tags.at(0) !== '' ? tags : [],
			partypes: partypes.at(0) !== '' ? partypes : [],
		});
	})
	.get('/champions/:id', (ctx) => {
		return ctx.response.body = ChampionsRepository.getById(ctx.params.id);
	})
	.get('/champions/:id/images', (ctx) => {
		const { searchParams } = ctx.request.url;
		const skinNumber = searchParams.get('skinNumber') || '0';
		return ctx.response.body = [
			ImagesRepository.getLoading({
				championName: ctx.params.id,
				skin: skinNumber,
			}),
			ImagesRepository.getSplash({
				championName: ctx.params.id,
				skin: skinNumber,
			}),
			ImagesRepository.getSquare({
				championName: ctx.params.id,
			}),
		];
	});

const summonersRouter = new Router()
	.get('/summoners/:summonerName', async (ctx) => {
		const { summonerName } = ctx.params;
		const { searchParams } = ctx.request.url;
		const region = searchParams.get('region') || 'LA1';
		const apiKey = ctx.request.headers.get('api_key') || '';
		return ctx.response.body = await SummonersRepository.getSummonerByName({
			apiKey,
			region,
			summonerName,
		});
	});

const imagesRouter = new Router()
	.get('/images/icons/:iconId', (ctx) => {
		const { iconId } = ctx.params;
		return ctx.response.body = ImagesRepository.getIconUrlById(iconId);
	})
	.get('/images/spells/:spellName', (ctx) => {
		const { spellName } = ctx.params;
		return ctx.response.body = ImagesRepository.getSpellUrlByName(spellName);
	});

const infoRouter = new Router()
	.get('/info/regions', (ctx) => {
		return ctx.response.body = REGIONS;
	});

const app = new Application()
	.use(championsRouter.routes())
	.use(summonersRouter.routes())
	.use(imagesRouter.routes())
	.use(infoRouter.routes());

await app.listen({ port: 3000 });
