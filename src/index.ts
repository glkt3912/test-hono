import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Bun!')
})

export default {
  port: 3010,
  fetch: app.fetch,
}
