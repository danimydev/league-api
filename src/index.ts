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
	});

const imagesRouter = new Router()
	.get('/images/:championName', (ctx) => {
		const { searchParams } = ctx.request.url;
		return ctx.response.body = ImageRepository.getLoading(
			{
				championName: ctx.params.championName,
				skin: searchParams.get('skin') || '0',
			},
		);
	});

const app = new Application();

app.use(championsRouter.routes());
app.use(imagesRouter.routes());

await app.listen({ port: 3000 });
