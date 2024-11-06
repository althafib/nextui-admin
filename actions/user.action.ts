"use server";
import { getDbInstance } from "@/lib/db";
import { users } from "@/lib/schema";

export async function getUsers(): Promise<{
  data: (typeof users)[] | null;
  error: any;
}> {
  const db = await getDbInstance();
  if (!db) return { data: null, error: "Db Error!" };
  const selectResult = await db.select().from(users).limit(6);
  console.log("Results", selectResult);
  return { data: [], error: null };
}
