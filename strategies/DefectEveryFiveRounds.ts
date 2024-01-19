import { Strategy } from "../game.ts";

export class DefectEveryFiveRounds extends Strategy {
  play(
    currentRound: number,
    _myHistory: boolean[],
    _opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    if (currentRound % 5 === 0) {
      return false;
    }
    return true;
  }
}
