import { Strategy } from "../game.ts";

export class AlwaysDefect extends Strategy {
  play(): boolean {
    return false;
  }
}
