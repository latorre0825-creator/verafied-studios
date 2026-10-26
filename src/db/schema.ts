import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * Studio catalogue — every product VeRaFIED builds and ships.
 * `slug` is the stable public identifier used by the ecosystem grid.
 */
export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    tagline: text("tagline").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
    accent: text("accent").notNull().default("#7C5CFF"),
    icon: text("icon").notNull().default("app"),
    platforms: text("platforms").array().notNull().default([]),
    highlights: text("highlights").array().notNull().default([]),
    status: text("status").notNull().default("live"),
    downloads: integer("downloads").notNull().default(0),
    rating: integer("rating").notNull().default(5),
    link: text("link"),
    featured: boolean("featured").notNull().default(false),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("products_slug_idx").on(table.slug)],
);

export type Product = typeof products.$inferSelect;
