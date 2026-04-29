import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { assertValue } from "@/utilities/assertValue";
import * as schema from "./schema";

const sql = neon(
	assertValue(process.env.DATABASE_URL, "DATABASE_URL is not set"),
);

export const db = drizzle(sql, { schema });
