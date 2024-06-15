

DROP TABLE "public"."game";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."games";

ALTER TABLE "public"."games" ALTER COLUMN "id" drop default;

DROP TABLE "public"."games";
