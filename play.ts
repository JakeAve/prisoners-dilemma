import { playGenerations } from "./game.ts";
import { AlwaysCooperate } from "./strategies/AlwaysCooperate.ts";
import { AlwaysDefect } from "./strategies/AlwaysDefect.ts";
import { CopyCat } from "./strategies/CopyCat.ts";
import { DefectEveryFiveRounds } from "./strategies/DefectEveryFiveRounds.ts";
import { DefectOnceAhead } from "./strategies/DefectOnceAhead.ts";
import { DefectWhenBehind } from "./strategies/DefectWhenBehind.ts";
import { DoubleRetaliation } from "./strategies/DoubleRetaliation.ts";
import { NoForgiveness } from "./strategies/NoForgiveness.ts";
import { NoTrust } from "./strategies/NoTrust.ts";
import { Random } from "./strategies/Random.ts";
import { Tester } from "./strategies/Tester.ts";
import { TitForTat } from "./strategies/TitForTat.ts";
import { TitForTwoTats } from "./strategies/TitForTwoTats.ts";
import { Tricky } from "./strategies/Tricky.ts";
import { RandomButMean } from "./strategies/RandomButMean.ts";
import { BeatPushover } from "./strategies/BeatPushover.ts";
import { Forgiveness } from "./strategies/Forgiveness.ts";
import { Sus } from "./strategies/Sus.ts";
import { OppositeTown } from "./strategies/OppositeTown.ts";
import { RandomButNice } from "./strategies/RandomButNice.ts";

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
  new NoTrust("No Trust"),
  new Tester("Tester"),
  new DefectOnceAhead("Defect Once Ahead"),
  new DoubleRetaliation("Double Retaliation"),
  new Tricky("Tricky"),
  new RandomButMean("RandomButMean"),
  new BeatPushover("BeatPushOver"),
  new Forgiveness("Forgiveness"),
  new Sus("Sus"),
  new OppositeTown("OppositeTown"),
  new RandomButNice("Random but Nice"),
];

// const tournament = playTournament(strategies, 200);

// Deno.writeTextFileSync("result.json", JSON.stringify(tournament, null, 2));

// const final = playSurvival(strategies, 200);

// Deno.writeTextFileSync("survival.json", JSON.stringify(final, null, 2));

const final = playGenerations(strategies, 200, 5);

Deno.writeTextFileSync("generations.json", JSON.stringify(final, null, 2));
