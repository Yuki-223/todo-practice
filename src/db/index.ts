import "server-only";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

// Node.js only. Import from Server Components, Route Handlers or Server Actions.
const databasePath = process.env.DATABASE_URL ?? "./data/todo.db";
mkdirSync(dirname(databasePath), { recursive: true });
const sqlite = new Database(databasePath);
sqlite.pragma("journal_mode = WAL");

export const db = drizzle(sqlite, { schema });
