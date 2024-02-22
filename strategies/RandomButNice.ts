import { Strategy } from "../game.ts";

export class RandomButNice extends Strategy {
  play(): boolean {
    return Math.random() < .8;
  }
}
