import { expect, test, vi } from 'vitest';
import {
  client_setAuthorization,
  client_setBaseUrl,
  client_setFetch,
  getProjects,
} from '../src/index.js';

test('adds rest path for Data Center deployment root', async () => {
  const fetchMock = vi.fn<(request: Request) => Promise<Response>>(
    async () =>
      new Response(JSON.stringify({ values: [] }), {
        headers: { 'Content-Type': 'application/json' },
      }),
  );
  client_setBaseUrl('https://bitbucket.example.test/context');
  client_setAuthorization('Bearer token');
  client_setFetch(fetchMock as typeof globalThis.fetch);

  await getProjects();

  const request = fetchMock.mock.calls.at(0)?.at(0);
  if (!request) throw new Error('Expected a request');
  expect(request.url).toBe(
    'https://bitbucket.example.test/context/rest/api/latest/projects',
  );
  expect(request.headers.get('Authorization')).toBe('Bearer token');
});
