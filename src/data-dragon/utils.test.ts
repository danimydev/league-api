import { assertEquals } from "std/assert";

import Utils from "@/data-dragon/utils.ts";

Deno.test("getNormalizedChampionName", () => {
  assertEquals(
    Utils.getNormalizedChampionName("  aurelion sol "),
    "AurelionSol",
  );

  assertEquals(
    Utils.getNormalizedChampionName("  aUrelion sol "),
    "AurelionSol",
  );

  assertEquals(
    Utils.getNormalizedChampionName("Annie"),
    "Annie",
  );

  assertEquals(
    Utils.getNormalizedChampionName("ezreal "),
    "Ezreal",
  );
});
