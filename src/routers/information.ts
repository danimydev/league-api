import { Router } from 'oak';

import REGIONS from '@/data/regions.ts';
import VERSIONS from '@/data/versions.ts';

const informationRouter = new Router({ prefix: '/information' })
  .get('/regions', (ctx) => {
    return ctx.response.body = REGIONS;
  })
  .get('/versions', (ctx) => {
    return ctx.response.body = VERSIONS;
  });

export default informationRouter;
