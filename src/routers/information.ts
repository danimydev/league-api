import { Router } from "oak";

import REGIONS from "@/data/regions.ts";
import VERSIONS from "@/data/versions.ts";
import LANGUAGES from "@/data/languages.ts";

const informationRouter = new Router({ prefix: "/information" })
  .get("/regions", (ctx) => {
    return ctx.response.body = REGIONS;
  })
  .get("/versions", (ctx) => {
    return ctx.response.body = VERSIONS;
  })
  .get("/languages", (ctx) => {
    return ctx.response.body = LANGUAGES;
  });

export default informationRouter;
