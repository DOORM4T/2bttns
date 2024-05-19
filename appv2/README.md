# Rewrite Plan

- [ ] Hasura Setup
- [ ] Next.js Setup
- [ ] Tailwind / Daisy UI setup
- [ ] Auth.js Setup
- [ ] Game Modes as standalone containers
  - [ ] Classic Mode
  - [ ] Multiplayer Mode

## Contribution guidelines

- Feel free to assign yourself open issues / create new issues
- Maintainers should triage / determine priority of tasks
- To contribute, create your own fork of https://github.com/2bttns/2bttns. PRs should be raised against the targeted release version corresponding to the issue.
- TODO: Branch / issue naming / labeling conventions

# 2bttns Admin Console Local Development

## Hasura/Postgres Setup

Reference: https://hasura.io/docs/latest/getting-started/docker-simple/

1. Start the Hasura & Postgres containers:

```sh
# First, ensure docker is installed and running
# Start Hasura / Postgres via docker-compose:
docker compose up -d
```

2. View the Hasura console at http://localhost:8080/console

## Node.js / NVM Setup

1. Install nvm: https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script
2. Use the Node.js version corresponding to the `.nvmrc`.

```sh
# At time of writing, we are using node v20.13.1
nvm install
nvm use
node -v
```

## 2bttns-console (Next.js App)

Reference: https://nextjs.org/docs/getting-started/installation

1. Start the Next.js development server

```sh
cd 2bttns-console
npm run dev
```

2. View the 2bttns console at http://localhost:3000
