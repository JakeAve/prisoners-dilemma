import { Strategy } from "../game.ts";

export class Tester extends Strategy {
  play(
    currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (currentRound === 1) {
      return true;
    } else if (!opponentHistory.at(-1)) {
      return false;
    } else if (opponentHistory.every((val) => val === true)) {
      return false;
    }
    return true;
  }
}
