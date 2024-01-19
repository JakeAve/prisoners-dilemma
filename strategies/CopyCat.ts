import { Strategy } from "../game.ts";

export class CopyCat extends Strategy {
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
    return !!opponentHistory.at(-1);
  }
}
