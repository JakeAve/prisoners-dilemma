import { playTournament } from "../game.ts";
import { strategies } from "../strategies.ts";

const tournament = playTournament(strategies, 200);

Deno.writeTextFileSync("tournament.json", JSON.stringify(tournament, null, 2));
