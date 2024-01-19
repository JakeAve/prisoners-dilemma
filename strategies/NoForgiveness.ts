import { Strategy } from "../game.ts";

export class NoForgiveness extends Strategy {
  play(
    _currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (opponentHistory.includes(false)) {
      return false;
    }
    return true;
  }
}
