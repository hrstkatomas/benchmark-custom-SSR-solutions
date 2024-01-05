import { leagues } from "./data/leagues.ts";

export function getLeagues(): Promise<typeof leagues> {
  return Promise.resolve(leagues);
}
