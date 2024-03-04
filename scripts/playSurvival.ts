import { playSurvival } from "../game.ts";
import { strategies } from "../strategies.ts";

const final = playSurvival(strategies, 200);

Deno.writeTextFileSync("survival.json", JSON.stringify(final, null, 2));
