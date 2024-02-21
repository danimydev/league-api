import { Router } from "oak";

import dataDragon from "@/services/data-dragon/index.ts";

export const imagesRouter = new Router({ prefix: "/images" })
  .get("/profile-icons", async (ctx) => {
    try {
      const { searchParams } = ctx.request.url;
      const lang = searchParams.get("lang");
      const version = searchParams.get("version");
      const profileIcons = await dataDragon.getProfileIcons({ version, lang });
      const formmatedProfileIcons = Object.values(profileIcons.data).map(
        (i) => ({
          id: i.id,
          image: {
            ext: "png",
            url: dataDragon.getProfileIcon({ id: i.id, version }),
          },
        }),
      );
      ctx.response.status = 200;
      return ctx.response.body = {
        type: profileIcons.type,
        version: profileIcons.version,
        data: formmatedProfileIcons,
      };
    } catch (error) {
      ctx.response.status = 500;
      return ctx.response.body = {
        error,
      };
    }
  });
