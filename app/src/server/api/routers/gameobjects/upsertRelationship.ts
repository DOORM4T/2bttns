import { z } from "zod";
import { publicProcedure } from "../../trpc";

// Creates/updates a relationship in both directions, meaning two records are created/updated.
export const upsertRelationship = publicProcedure
  .input(
    z.object({
      gameObjectId1: z.string(),
      gameObjectId2: z.string(),
      weightId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const weight = await ctx.prisma.weight.findFirst({
      where: {
        id: input.weightId,
      },
    });

    if (!weight) {
      throw new Error("Weight not found");
    }

    if (input.gameObjectId1 === input.gameObjectId2) {
      throw new Error("Cannot create relationship to self");
    }

    const gameObject1 = await ctx.prisma.gameObject.findFirst({
      where: {
        id: input.gameObjectId1,
      },
    });

    if (!gameObject1) {
      throw new Error("GameObject 1 not found");
    }

    const gameObject2 = await ctx.prisma.gameObject.findFirst({
      where: {
        id: input.gameObjectId2,
      },
    });

    if (!gameObject2) {
      throw new Error("GameObject 2 not found");
    }

    const results = await ctx.prisma.$transaction([
      ctx.prisma.gameObjectRelationship.upsert({
        where: {
          fromGameObjectId_toGameObjectId: {
            fromGameObjectId: input.gameObjectId1,
            toGameObjectId: input.gameObjectId2,
          },
        },
        create: {
          fromGameObject: {
            connect: {
              id: input.gameObjectId1,
            },
          },
          toGameObject: {
            connect: {
              id: input.gameObjectId2,
            },
          },
          weight: {
            connect: {
              id: input.weightId,
            },
          },
        },
        update: {
          weight: {
            connect: {
              id: input.weightId,
            },
          },
        },
      }),
      ctx.prisma.gameObjectRelationship.upsert({
        where: {
          fromGameObjectId_toGameObjectId: {
            fromGameObjectId: input.gameObjectId2,
            toGameObjectId: input.gameObjectId1,
          },
        },
        create: {
          fromGameObject: {
            connect: {
              id: input.gameObjectId2,
            },
          },
          toGameObject: {
            connect: {
              id: input.gameObjectId1,
            },
          },
          weight: {
            connect: {
              id: input.weightId,
            },
          },
        },
        update: {
          weight: {
            connect: {
              id: input.weightId,
            },
          },
        },
      }),
    ]);

    return { results };
  });