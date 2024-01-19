import { Strategy } from "../game.ts";

export class DefectWhenBehind extends Strategy {
  play(
    _currentRound: number,
    _myHistory: boolean[],
    _opponentHistory: boolean[],
    myScore: number,
    opponentScore: number,
  ): boolean {
    if (myScore < opponentScore) {
      return false;
    } else return true;
  }
}
