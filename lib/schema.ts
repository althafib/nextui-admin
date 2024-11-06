import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  status: text("status"),
  email: text("email").notNull(),
  avatar: text("avatar").notNull(),
  age: numeric(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
