import { Strategy } from "../game.ts";

export class Forgiveness extends Strategy {
  play(
    _currentRound: number,
    myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (opponentHistory.at(-1) === false) {
      if (myHistory.slice(-5).every((val) => val === false)) {
        return true;
      } else return false;
    }
    return true;
  }
}
