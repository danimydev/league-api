import { Router } from "oak";

import { regions } from "@/data/regions.ts";
import { versions } from "@/data/versions.ts";
import { languages } from "@/data/languages.ts";

const informationRouter = new Router({ prefix: "/information" })
  .get("/regions", (ctx) => {
    return ctx.response.body = regions;
  })
  .get("/versions", (ctx) => {
    return ctx.response.body = versions;
  })
  .get("/languages", (ctx) => {
    return ctx.response.body = languages;
  });

export default informationRouter;
