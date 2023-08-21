import { Router } from 'https://deno.land/x/oak@v12.5.0/router.ts';
import REGIONS from '../data/regions.ts';

const informationRouter = new Router({ prefix: '/information' })
	.get('/regions', (ctx) => {
		return ctx.response.body = REGIONS;
	})
	.get('/versions', (ctx) => {
		return ctx.response.body = [];
	});

export default informationRouter;
