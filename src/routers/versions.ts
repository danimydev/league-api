import { Router } from 'oak';

const versionsRouter = new Router({ prefix: '/versions' })
	.get('/', async (ctx) => {
		const response = await fetch(
			'https://ddragon.leagueoflegends.com/api/versions.json',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		const { status, statusText } = response;
		if (status !== 200) {
			ctx.response.status = status;
			ctx.response.body = {
				code: statusText,
			};
		}

		const versions = await response.json() as string[];
		if (!versions) {
			ctx.response.status = 500;
			ctx.response.body = {
				code: 'INTERNAL_SERVER_ERROR',
			};
		}
		ctx.response.status = 200;
		ctx.response.body = {
			versions,
			timeStampt: Date.now(),
		};
		return;
	});

export default versionsRouter;
