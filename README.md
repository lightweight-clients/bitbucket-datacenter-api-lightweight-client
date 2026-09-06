# Bitbucket Data Center 9.4 API Lightweight Client

Typed, dependency-free client generated from Bitbucket Data Center 9.4 OpenAPI schema.

```ts
import { client_setAuthorization, client_setBaseUrl, getProjects } from '@lightweight-clients/bitbucket-datacenter-api-lightweight-client';

client_setBaseUrl('https://bitbucket.example.com');
client_setAuthorization('Bearer token');
const result = await getProjects();
```

`client_setBaseUrl` accepts deployment root and adds `/rest`. Request functions accept generated `Options` with `path`, `query`, `headers`, and `body`. Successful calls return response data, request, and response; set `throwOnError: true` to throw on non-2xx responses.

Schema source: [lightweight-clients/schemas](https://github.com/lightweight-clients/schemas).
