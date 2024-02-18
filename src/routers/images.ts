import { Router } from "oak";

import dataDragon from "@/services/data-dragon/index.ts";

export const imagesRouter = new Router({ prefix: "/images" })
  .get("/profile-icons", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const lang = searchParams.get("lang");
      const version = searchParams.get("version");
      const profileIcons = await dataDragon.getProfileIcons({ version, lang });
      ctx.response.status = 200;
      return ctx.response.body = {
        profileIcons,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  })
  .get("/profile-icons/:id", (ctx) => {
    try {
      const { id } = ctx.params;
      const { searchParams } = ctx.request.url;
      const version = searchParams.get("version");
      const profileIcon = dataDragon.getProfileIcon({ id, version });
      ctx.response.status = 200;
      return ctx.response.body = {
        profileIcon,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  });
