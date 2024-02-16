import { assertEquals, assertGreater } from "std/assert";

import dataDragon from "@/data-dragon/index.ts";

Deno.test("dataDragon", async (t) => {
  await t.step("getVersions", async () => {
    const versions = await dataDragon.getVersions();
    assertEquals(typeof versions.at(0), "string");
    assertGreater(versions.length, 0);
  });

  await t.step("getVersions failed", async () => {
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
    const champion = await dataDragon.getChampion({ championName: "Aatrox" });
    assertEquals(champion.type, "champion");
    assertEquals(champion.format, "standAloneComplex");
  });
});
