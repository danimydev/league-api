import { Application } from 'oak';
import championsRouter from './routers/champions.ts';
import imagesRouter from './routers/images.ts';
import summonersRouter from './routers/summoners.ts';
import informationRouter from './routers/information.ts';
import versionsRouter from './routers/versions.ts';

const app = new Application()
	.use(championsRouter.routes())
	.use(summonersRouter.routes())
	.use(imagesRouter.routes())
	.use(informationRouter.routes())
	.use(versionsRouter.routes());

await app.listen({ port: 3000 });
