namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT: string;
    NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_WS: string;
    NEXTAUTH_URL: string;
    AUTH_SECRET: string;
    AUTH_TRUST_HOST: string;
    AUTH_KEYCLOAK_ID: string;
    AUTH_KEYCLOAK_SECRET: string;
    KEYCLOAK_ISSUER: string;
  }
}
