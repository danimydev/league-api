import { assertEquals, assertGreater } from "std/assert";

import dataDragon from "@/services/data-dragon/index.ts";

const championName = "Aatrox";

Deno.test("dataDragon", async (t) => {
  await t.step("getVersions", async () => {
    const versions = await dataDragon.getVersions();
    assertEquals(typeof versions.at(0), "string");
    assertGreater(versions.length, 0);
  });

  await t.step("getLanguages", async () => {
    const versions = await dataDragon.getLanguages();
    assertEquals(typeof versions.at(0), "string");
    assertGreater(versions.length, 0);
  });

  await t.step("getChampions", async () => {
    const champions = await dataDragon.getChampions({});
    assertEquals(champions.type, "champion");
    assertEquals(champions.format, "standAloneComplex");
  });

  await t.step("getChampion", async () => {
    const champion = await dataDragon.getChampion({ championName });
    assertEquals(champion.type, "champion");
    assertEquals(champion.format, "standAloneComplex");
  });

  await t.step("getChampionImagesUrl", () => {
    const championImagesUrl = dataDragon.getChampionImagesUrls({
      championName,
    });
    assertEquals(championImagesUrl.splash.ext, "image/jpg");
    assertEquals(championImagesUrl.loading.ext, "image/jpg");
    assertEquals(championImagesUrl.square.ext, "image/png");
  });

  await t.step("profileIcons", () => {
    const profileIcons = dataDragon.getProfileIcon({ id: "14" });
    assertEquals(profileIcons.version, "14.3.1");
    assertEquals(profileIcons.id, "14");
    assertEquals(profileIcons.ext, "image/png");
  });

  await t.step("profileIcon", async () => {
    const profileIcons = await dataDragon.getProfileIcons({});
    assertEquals(profileIcons.version, "14.3.1");
    assertEquals(profileIcons.type, "profileicon");
  });
});
