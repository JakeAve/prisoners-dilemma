import { playGenerations } from "../game.ts";
import { strategies } from "../strategies.ts";

const final = playGenerations(strategies, 200, 5);

Deno.writeTextFileSync("generations.json", JSON.stringify(final, null, 2));
