import { Strategy } from "../game.ts";

export class OldFriends extends Strategy {
  play(
    _currentRound: number,
    _myHistory: boolean[],
    opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    const opponentDefections = opponentHistory.filter((val) => val === false);
    if (opponentDefections.length > opponentHistory.length / 2) {
      return false;
    }
    return true;
  }
}
