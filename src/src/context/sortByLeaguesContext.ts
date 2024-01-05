import React, {createContext} from "react";

export const SortByLeaguesContext = createContext<null | boolean>(null);

export const useSortByLeaguesContext = (): boolean => {
    const sortByLeagues = React.useContext(SortByLeaguesContext)
    if (sortByLeagues === null) throw new Error("useSortByLeaguesContext must be used within a SortByLeaguesContext");

    return sortByLeagues;
};