import { Router } from "oak";

import dataDragon from "@/data-dragon/index.ts";

export const rootRouter = new Router({ prefix: "/" })
  .get("/versions", async (ctx) => {
    try {
      const versions = await dataDragon.getVersions();
      ctx.response.status = 200;
      return ctx.response.body = {
        versions,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  })
  .get("/languages", async (ctx) => {
    try {
      const languages = await dataDragon.getLanguages();
      ctx.response.status = 200;
      return ctx.response.body = {
        languages,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  });
