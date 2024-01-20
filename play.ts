import { playTournament } from "./game.ts";
import { AlwaysCooperate } from "./strategies/AlwaysCooperate.ts";
import { AlwaysDefect } from "./strategies/AlwaysDefect.ts";
import { CopyCat } from "./strategies/CopyCat.ts";
import { DefectEveryFiveRounds } from "./strategies/DefectEveryFiveRounds.ts";
import { DefectOnceAhead } from "./strategies/DefectOnceAhead.ts";
import { DefectWhenBehind } from "./strategies/DefectWhenBehind.ts";
import { NoForgiveness } from "./strategies/NoForgiveness.ts";
import { OldFriends } from "./strategies/OldFriends.ts";
import { Random } from "./strategies/Random.ts";
import { Tester } from "./strategies/Tester.ts";
import { TitForTat } from "./strategies/TitForTat.ts";
import { TitForTwoTats } from "./strategies/TitForTwoTats.ts";

const strategies = [
  new AlwaysCooperate("Always Cooperate"),
  new AlwaysDefect("Always Defect"),
  new TitForTat("Tit for Tat"),
  new DefectWhenBehind("Defect When Behind"),
  new DefectEveryFiveRounds("Defect Every 5 Rounds"),
  new NoForgiveness("No Forgiveness"),
  new TitForTwoTats("Tit for Two Tats"),
  new Random("Random"),
  new CopyCat("Copy Cat"),
  new OldFriends("Old Friends"),
  new Tester("Tester"),
  new DefectOnceAhead("Defect Once Ahead"),
];

const tournament = playTournament(strategies, 200);

Deno.writeTextFileSync("result.json", JSON.stringify(tournament, null, 2));
