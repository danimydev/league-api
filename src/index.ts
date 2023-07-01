import { Application, Router } from 'oak';
import { ChampionsRepository } from './repository/champions.ts';

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

const app = new Application();
app.use(championsRouter.routes());
await app.listen({ port: 3000 });
