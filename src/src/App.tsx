import React, { useState } from "react";
import { SortByLeaguesContext } from "./context/sortByLeaguesContext.ts";
import { SortByLeagueButton } from "./components/SortByLeagueButton.tsx";

export function App() {
  const [sortByLeagues, setSortByLeagues] = useState(false);

  return (
    <SortByLeaguesContext.Provider value={sortByLeagues}>
      <SortByLeagueButton onClick={() => setSortByLeagues((state) => !state)} />
      <div>Hello, this is live table. Use your imagination</div>
    </SortByLeaguesContext.Provider>
  );
}
