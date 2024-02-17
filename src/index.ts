import { Application } from "oak";

import { rootRouter } from "@/routers/root.ts";
import { championsRouter } from "@/routers/champions.ts";
import { summonersRouter } from "@/routers/summoners.ts";
import { imagesRouter } from "@/routers/images.ts";

const app = new Application()
  .use(rootRouter.routes())
  .use(championsRouter.routes())
  .use(summonersRouter.routes())
  .use(imagesRouter.routes());

await app.listen({ port: 3000 });
console.log("app started at 3000");
