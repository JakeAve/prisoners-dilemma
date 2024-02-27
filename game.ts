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
    _opponentScore: number
  ): boolean {
    return true;
  }
}

export function playGame(
  strategy1: Strategy,
  strategy2: Strategy,
  maxRounds: number
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
      score2
    );
    const did2Cooperate = strategy2.play(
      currentRound,
      history.map((res) => res.did2Cooperate),
      history.map((res) => res.did1Cooperate),
      score2,
      score1
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
      avg: s.totalScore / (strategies.length * 2),
    }))
    .toSorted((a, b) => b.avg - a.avg);
  return { averages, strategies, games };
}

export function playSurvival(strategies: Strategy[], averageRounds: 200) {
  const stats = [];
  let round = 1;
  while (strategies.length > 1) {
    const { averages } = playTournament(strategies, averageRounds);
    const lastAverage = averages.at(-1);
    for (const [i, s] of strategies.entries()) {
      if (s.name === lastAverage?.name) {
        stats.push({ round, strategy: s });
        strategies.splice(i, 1);
        break;
      }
    }
    round++;
  }
  return { winner: strategies[0], stats };
}

export function playGenerations(
  strategies: Strategy[],
  averageRounds = 200,
  generations = 10
) {
  const result: Record<string, number>[] = [];
  let i = 0;

  for (; i < generations; i++) {
    const map: Record<string, number> = {};
    for (const s of strategies) {
      map[s.name] = 1;
    }
    const { averages } = playTournament(strategies, averageRounds);
    for (const a of averages) {
      const isPositive = a.avg - 400 > 0;
      const remainder = Math.floor(Math.abs((a.avg - 400) / 100));
      // console.log(a, { remainder });
      let j = 0;
      for (; j < remainder; j++) {
        if (isPositive) {
          const s = strategies.find((s) => s.name === a.name);
          if (!s) throw new Error(`No strategy found with name ${a.name}`);
          const clone = Object.assign(
            Object.create(Object.getPrototypeOf(s)),
            s
          );
          strategies.push(clone);
          map[a.name] = map[a.name] + 1;
        } else {
          console.log(`${a.name} is negative`)
          const idx = strategies.findIndex((s) => s.name === a.name);
          if (idx === -1)
            throw new Error(`No strategy found with name ${a.name}`);
          strategies.splice(idx, 1);
          map[a.name] = map[a.name] - 1;
        }
      }
    }
    for (const s of strategies) {
      s.totalScore = 0;
    }
    result.push(map);
  }

  return result;
}
