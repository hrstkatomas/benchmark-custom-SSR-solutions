import {useSortByLeaguesContext} from "../context/sortByLeaguesContext.ts";
import React from "react";

interface SortByLeagueButtonProps {
    onClick: () => void;
}

export const SortByLeagueButton = ({ onClick }: SortByLeagueButtonProps) => {
    const sortByLeagues = useSortByLeaguesContext();
    return (
        <button
            type={"button"}
            className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-md mr-auto"
            onClick={onClick}
        >
            Sort by {sortByLeagues ? "league" : "time"}
        </button>
    );
};