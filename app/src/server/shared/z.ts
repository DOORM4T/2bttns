import { z } from "zod";

export const textFilter = z.object({
  in: z.array(z.string()).optional(),
  contains: z.string().optional(),
});

export const tagFilter = z.object({
  include: z.array(z.string()),
  exclude: z.array(z.string()),
  includeUntagged: z.boolean().default(false),
});

export const sort = z.enum(["asc", "desc"]);
