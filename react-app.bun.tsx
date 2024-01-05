import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { Html } from "./src/src/Html.tsx";
import { App } from "./src/src/App.tsx";
import { Props } from "./src/src/components/Props.tsx";
import { getLeagues } from "./src/src/fetch/getLeagues.ts";

const headers = {
  headers: {
    "Content-Type": "text/html",
  },
};

const port = Number(3001);
Bun.serve({
  port,
  async fetch(req) {
    return new Response(
      await renderToReadableStream(
        <Html>
          <App />
          <Props data={await getLeagues()} />
        </Html>,
      ),
      headers,
    );
  },
});

console.log(`Server running on\n  http://localhost:${port}`);
