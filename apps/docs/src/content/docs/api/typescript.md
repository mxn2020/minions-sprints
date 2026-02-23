---
title: TypeScript API
description: TypeScript API reference for @minions-sprints/sdk
---

## `createClient(options?)`

Create a new client instance.

```typescript
import { createClient } from '@minions-sprints/sdk';

const client = createClient({ debug: true });
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `options` | `object` | `{}` | Configuration options |

### Returns

A client object with the `version` property and any provided options.
