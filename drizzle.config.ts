import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());
const databasePath = process.env.DATABASE_URL ?? "./data/todo.db";
mkdirSync(dirname(databasePath), { recursive: true });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: { url: databasePath },
});
