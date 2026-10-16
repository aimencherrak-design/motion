import path from "node:path";
import Database from "better-sqlite3";
import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "./schema";
import { fichierBase } from "@/lib/chemins";

type Db = BetterSQLite3Database<typeof schema> & { $client: Database.Database };

// Une seule connexion pour tout le serveur (conservée entre rechargements en dev).
const g = globalThis as unknown as { __apporteurDb?: Db };

function ouvrir(): Db {
  const sqlite = new Database(fichierBase());
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");
  const db = drizzle(sqlite, { schema });
  migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle") });
  return db;
}

export function getDb(): Db {
  if (!g.__apporteurDb) g.__apporteurDb = ouvrir();
  return g.__apporteurDb;
}

export { schema };
