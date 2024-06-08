# Rewrite Plan

- [ ] Hasura Setup
- [ ] Next.js Setup
- [ ] Tailwind / Daisy UI setup
- [ ] Auth.js + Keycloak Setup
- [ ] Game Modes as standalone containers
  - [ ] Classic Mode
  - [ ] Multiplayer Mode

## Contribution guidelines

- Feel free to assign yourself open issues / create new issues
- Maintainers should triage / determine priority of tasks
- To contribute, create your own fork of https://github.com/2bttns/2bttns. PRs should be raised against the targeted release version corresponding to the issue.
- TODO: Branch / issue naming / labeling conventions

---

# 2bttns Admin Console Local Development

## I. Node.js / NVM Setup

1. Install nvm: https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script
2. Use the Node.js version corresponding to the `.nvmrc`.
   ```sh
   # At time of writing, we are using node v20.13.1
   nvm install
   nvm use
   node -v
   ```

## II. `2bttns-console` Next.js App Development

Reference: https://nextjs.org/docs/getting-started/installation

1. Start the Next.js development server

   ```sh
   cd 2bttns-console
   npm run dev
   ```

2. View the 2bttns console at http://localhost:3000

---

## Docker Compose Setup

Start the necessary services via Docker Compose. This will spin up containers for:

1. postgres (database hasura and keycloak will depend on)
2. hasura graphql-engine / data-connector-agent (graphql platform)
3. keycloak (for identity and access management)

```sh
# 2bttns/appv2
# ensure your current directory is at the same level as the docker-compose.yaml
# otherwise, .env substitutions will not be picked up

# To verify compose .env vars are substituted as expected:
docker compose config

# Start the docker compose services
docker compose up -d

# To take down the services...
# Note: volume data will persist unless manually deleted
docker compose down

# To delete the local volume data:
docker volume rm appv2_postgresql_data
```

---

## Start the Hasura console

You can manage database tables, preview graphql queries, and more via the Hasura console.

```sh
# This will start the console based on the hasura server running as described in the hasura/config.yaml
cd hasura
hasura console
```
