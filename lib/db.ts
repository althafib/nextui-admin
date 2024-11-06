import pg, { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export const connection: { con: Pool | null } = { con: null };

export const getDbInstance = async (): Promise<NodePgDatabase<
  Record<string, never>
> | null> => {
  try {
    connection.con = new pg.Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      // ssl: { rejectUnauthorized: false },
    });
  } catch (error) {
    console.warn("WARNING: Connection failed, read README.MD : \n ", error);
  }
  if (!connection.con) {
    // eslint-disable-next-line no-console
    console.warn("WARNING: Connection failed, read README.MD.");
    return null;
  }
  try {
    const db = drizzle(connection.con);
    return db;
  } catch (e) {
    console.log(e);
    return null;
  }
};
