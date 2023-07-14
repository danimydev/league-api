import { Application, Router } from 'oak';
import { ChampionsRepository } from './repositories/champions.ts';
import { ImageRepository } from './repositories/images.ts';

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
			ImageRepository.getLoading({
				championName: ctx.params.id,
				skin: skinNumber,
			}),
			ImageRepository.getSplash({
				championName: ctx.params.id,
				skin: skinNumber,
			}),
			ImageRepository.getSquare({
				championName: ctx.params.id,
			}),
		];
	});

const app = new Application()
	.use(championsRouter.routes());

await app.listen({ port: 3000 });
