import React from "react";
import { Header } from "./components/Header.tsx";

interface AppProps {
  children?: React.ReactNode;
}

export function Html({ children }: AppProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BUN Livesport.cz</title>
        <meta name="description" content="Yis!" />
      </head>
      <body className="bg-[#eee]">
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
