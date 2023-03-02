import { z } from "zod";
import { publicProcedure } from "../../trpc";

export const create = publicProcedure
  .input(
    z.object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      weight: z.number().optional(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const createdWeight = await ctx.prisma.weight.create({
      data: {
        id: input.id,
        name: input.name,
        description: input.description,
        weight: input.weight ?? 0,
      },
    });

    return { createdWeight };
  });