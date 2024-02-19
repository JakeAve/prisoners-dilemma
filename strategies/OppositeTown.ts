import { Strategy } from "../game.ts";

export class OppositeTown extends Strategy {
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
    const lastRound = opponentHistory.at(-1);
    return !lastRound;
  }
}
