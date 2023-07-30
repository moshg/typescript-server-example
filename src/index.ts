import { serve } from '@hono/node-server';
import { serverConfig } from 'config';
import { Hono } from 'hono';

const app = new Hono({ strict: true });
app.get('/', (c) => c.text('Hello Hono!'));

serve({ fetch: app.fetch, port: serverConfig.port }, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
