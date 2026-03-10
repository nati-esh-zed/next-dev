import { RouterFramework, status } from "@bepalo/router";

const port = parseInt(process.env.BACKEND_PORT || "4000");

const router = new RouterFramework({
  normalizeTrailingSlash: true,
  rootPath: "./routes",
  defaultCatcher: (_req, { error }) => {
    console.error(Date.now(), error);
    return status(500);
  },
});

await router.load();

Bun.serve({
  port,
  async fetch(request: Request) {
    return await router.respond(request);
  },
});

console.log("Server is listening on http://localhost:" + port);
