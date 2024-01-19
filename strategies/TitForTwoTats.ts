import { Strategy } from "../game.ts";

export class TitForTwoTats extends Strategy {
  play(
    currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (currentRound === 1 || currentRound === 2) {
      return true;
    }
    if (!opponentHistory.at(-1) && !opponentHistory.at(-2)) {
      return false;
    }
    return true;
  }
}
