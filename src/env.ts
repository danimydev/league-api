import { load } from "std/dotenv";

const env = await load();

export const envConfig = {
  port: parseInt(env["PORT"] || "3000"),
  riotApiKey: env["RIOT_API_KEY"] || "",
};
