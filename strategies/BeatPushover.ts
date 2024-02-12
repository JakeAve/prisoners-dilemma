import { Strategy } from "../game.ts";

export class BeatPushover extends Strategy {
  play(
    _currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (
      opponentHistory.at(-1) &&
      opponentHistory.filter((val) => val).length > opponentHistory.length / 2
    ) {
      return false;
    }
    if (opponentHistory.at(-1) === false) {
      return false;
    }
    return true;
  }
}
