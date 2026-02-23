# minions-sprints

**Sprint definitions, scope, and velocity tracking**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-sprints/sdk minions-sdk

# Python
pip install minions-sprints

# CLI (global)
npm install -g @minions-sprints/cli
```

---

## CLI

```bash
# Show help
sprints --help
```

---

## Python SDK

```python
from minions_sprints import create_client

client = create_client()
```

---

## Project Structure

```
minions-sprints/
  packages/
    core/           # TypeScript core library (@minions-sprints/sdk on npm)
    python/         # Python SDK (minions-sprints on PyPI)
    cli/            # CLI tool (@minions-sprints/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [sprints.minions.help](https://sprints.minions.help)
- Blog: [sprints.minions.blog](https://sprints.minions.blog)
- App: [sprints.minions.wtf](https://sprints.minions.wtf)

---

## License

[MIT](LICENSE)
