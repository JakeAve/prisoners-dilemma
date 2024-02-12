import { Strategy } from "../game.ts";

export class Sus extends Strategy {
  play(
    _currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    const last5Moves = opponentHistory.slice(-5).every((val) => val);
    if (last5Moves) {
      return true;
    }
    return false;
  }
}
