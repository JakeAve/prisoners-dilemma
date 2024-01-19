import { Strategy } from "../game.ts";

export class Random extends Strategy {
  play(): boolean {
    return Math.random() > .5;
  }
}
