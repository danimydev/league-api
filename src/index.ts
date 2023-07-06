import { Application, Router } from 'oak';
import { ChampionsRepository } from './repositories/champions.ts';
import { ImageRepository } from './repositories/images.ts';

const championsRouter = new Router()
	.get('/champions', (ctx) => {
		return ctx.response.body = ChampionsRepository.get({
			tags: [],
			partype: [],
		});
	})
	.get('/champions/:id', (ctx) => {
		return ctx.response.body = ChampionsRepository.getById(ctx.params.id);
	});

const imagesRouter = new Router()
	.get('/images/:championName', (ctx) => {
		const searchParams = ctx.request.url.searchParams;
		return ctx.response.body = ImageRepository.getLoading(
			{
				championName: ctx.params.championName,
				skin: searchParams.get('skin') || '',
			},
		);
	});

const app = new Application();

app.use(championsRouter.routes());
app.use(imagesRouter.routes());

await app.listen({ port: 3000 });
