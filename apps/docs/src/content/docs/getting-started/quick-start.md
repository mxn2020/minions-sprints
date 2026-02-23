---
title: Quick Start
description: Get up and running with Minions Sprints in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-sprints/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_sprints import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
sprints info
```
