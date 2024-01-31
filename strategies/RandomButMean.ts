import { Strategy } from "../game.ts";

export class RandomButMean extends Strategy {
  play(): boolean {
    return Math.random() > .25;
  }
}
