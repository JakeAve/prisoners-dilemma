import { Strategy } from "../game.ts";

export class Tricky extends Strategy {
  play(
    currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number
  ): boolean {
    if (currentRound === 1) {
      return true;
    }
    if (opponentHistory.at(-1) === false) {
      return false;
    }
    if (Math.random() < .1) return false;
    return true
  }
}
