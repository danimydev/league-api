import { Application } from "oak";

import { envConfig } from "@/env.ts";

import { rootRouter } from "@/routers/root.ts";
import { championsRouter } from "@/routers/champions.ts";
import { summonersRouter } from "@/routers/summoners.ts";
import { imagesRouter } from "@/routers/images.ts";

const app = new Application()
  .use(rootRouter.routes())
  .use(championsRouter.routes())
  .use(summonersRouter.routes())
  .use(imagesRouter.routes());

console.log(`app started at ${envConfig.port}`);
await app.listen({ port: envConfig.port });
