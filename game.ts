export interface Result {
  did1Cooperate: boolean;
  did2Cooperate: boolean;
  score1: number;
  score2: number;
}

export class Strategy {
  name = "Always Cooperate";
  totalScore = 0;
  wins = 0;
  losses = 0;
  ties = 0;

  constructor(name: string) {
    this.name = name;
  }
  play(
    _currentRound: number,
    _myHistory: boolean[],
    _opponentHistory: boolean[],
    _myScore: number,
    _opponentScore: number,
  ): boolean {
    return true;
  }
}

export function playGame(
  strategy1: Strategy,
  strategy2: Strategy,
  maxRounds: number,
) {
  const history: Result[] = [];
  let score1 = 0,
    score2 = 0;
  let currentRound = 1;
  for (; currentRound <= maxRounds; currentRound++) {
    const did1Cooperate = strategy1.play(
      currentRound,
      history.map((res) => res.did1Cooperate),
      history.map((res) => res.did2Cooperate),
      score1,
      score2,
    );
    const did2Cooperate = strategy2.play(
      currentRound,
      history.map((res) => res.did2Cooperate),
      history.map((res) => res.did1Cooperate),
      score2,
      score1,
    );

    let points1 = 0,
      points2 = 0;
    if (did1Cooperate && did2Cooperate) {
      points1 += 3;
      points2 += 3;
    }
    if (did1Cooperate && !did2Cooperate) {
      points2 += 5;
    }
    if (!did1Cooperate && did2Cooperate) {
      points1 += 5;
    }
    if (!did1Cooperate && !did2Cooperate) {
      points1 += 1;
      points2 += 1;
    }
    score1 += points1;
    score2 += points2;
    history.push({
      score1,
      score2,
      did1Cooperate,
      did2Cooperate,
    });
  }
  const lastRound = history.at(-1) as Result;
  if (lastRound?.score1 === lastRound?.score2) {
    strategy1.ties++;
    strategy2.ties++;
  }
  if (lastRound?.score1 > lastRound?.score2) {
    strategy1.wins++;
    strategy2.losses++;
  }
  if (lastRound?.score1 < lastRound?.score2) {
    strategy1.losses++;
    strategy2.wins++;
  }
  strategy1.totalScore += score1;
  strategy2.totalScore += score2;
  return history;
}

interface Game {
  strategy1: string;
  strategy2: string;
  game: Result[];
}

export function playTournament(strategies: Strategy[], averageRounds: number) {
  const games: Game[] = [];
  for (let i = 0; i < strategies.length; i++) {
    const strategy1 = strategies[i];
    for (let j = 0; j < strategies.length; j++) {
      const strategy2 = strategies[j];
      const game = playGame(strategy1, strategy2, averageRounds);
      games.push({
        strategy1: strategy1.name,
        strategy2: strategy2.name,
        game,
      });
    }
  }
  const averages = strategies
    .map((s) => ({
      name: s.name,
      avg: s.totalScore / strategies.length,
    }))
    .toSorted((a, b) => b.avg - a.avg);
  return { averages, strategies, games };
}

