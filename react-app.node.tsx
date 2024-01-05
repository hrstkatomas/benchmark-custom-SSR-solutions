import React, { createElement } from "react";
import { Html } from "./src/src/Html.tsx";
import { Props } from "./src/src/components/Props.tsx";
import { getLeagues } from "./src/src/fetch/getLeagues.ts";
import { renderToPipeableStream } from "react-dom/server";
import { App } from "./src/src/App.tsx";
import * as http from "http";

let didError = false;
http
  .createServer(async function (req, res) {
    const stream = renderToPipeableStream(
      <Html>
        <App />
        <Props data={await getLeagues()} />
      </Html>,
      {
        onShellReady() {
          // The content above all Suspense boundaries is ready.
          // If something errored before we started streaming, we set the error code appropriately.
          res.statusCode = didError ? 500 : 200;
          res.setHeader("Content-type", "text/html");
          res.setHeader("Cache-Control", "no-transform"); // set to match the Deno benchmark, which requires this for an apples to apples comparison
          stream.pipe(res);
        },
        onShellError(error) {
          // Something errored before we could complete the shell so we emit an alternative shell.
          res.statusCode = 500;
          res.end("<!doctype html><p>Loading...</p>");
        },
        onError(err) {
          didError = true;
          console.error(err);
        },
      },
    );
  })
  .listen(9080);
