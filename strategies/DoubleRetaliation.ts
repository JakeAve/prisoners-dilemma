import { Strategy } from "../game.ts";

export class DoubleRetaliation extends Strategy {
  play(
    currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (currentRound === 1) {
      return true;
    }
    if (
      opponentHistory.at(-1) === false ||
      opponentHistory.at(-2) === false
    ) {
      return false;
    }
    return true;
  }
}
