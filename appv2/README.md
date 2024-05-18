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

# Local Development

## Hasura Setup

Reference: https://hasura.io/docs/latest/getting-started/docker-simple/

1. Start the Hasura & Postgres containers:

```sh
# First, ensure docker is installed and running
# Start Hasura / Postgres via docker-compose:
docker compose up -d
```

2. View the Hasura console at http://localhost:8080/console
