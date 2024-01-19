import { Strategy } from "../game.ts";

export class TitForTat extends Strategy {
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
    const lastOpponentMove = opponentHistory.at(-1);
    if (!lastOpponentMove) {
      return false;
    }
    if (lastOpponentMove) {
      return true;
    }
    return true;
  }
}
