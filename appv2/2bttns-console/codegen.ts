import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/v1/graphql",
  documents: "src/gql/**/*.graphql",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/generated/": {
      preset: "client",
    },
    "./src/gql/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
