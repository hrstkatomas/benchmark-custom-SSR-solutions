import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { Html } from "./src/src/Html.tsx";
import { Props } from "./src/src/components/Props.tsx";
import { getLeagues } from "./src/src/fetch/getLeagues.ts";
import { App } from "./src/src/App.tsx";

const headers = {
  headers: {
    "Content-Type": "text/html",
    "Cache-Control": "no-transform", // disables response body auto compression, see https://deno.land/manual/runtime/http_server_apis#automatic-body-compression
  },
};

Deno.serve(
  async (req) => {
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
  { port: 8080 },
);
