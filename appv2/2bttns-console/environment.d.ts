namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_URL: string;
    AUTH_SECRET: string;
    AUTH_TRUST_HOST: string;
    AUTH_KEYCLOAK_ID: string;
    AUTH_KEYCLOAK_SECRET: string;
    KEYCLOAK_ISSUER: string;
  }
}
