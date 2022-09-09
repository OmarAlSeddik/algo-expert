const tournamentWinner = (competitions: string[][], results: number[]) => {
  const teamScores: { [key: string]: number } = { "": 0 };
  let winnerTeam = "";
  for (let i = 0; i < results.length; i++) {
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];
    if (results[i] === 1) {
      teamScores[homeTeam]
        ? (teamScores[homeTeam] += 3)
        : (teamScores[homeTeam] = 3);
      if (teamScores[homeTeam] > teamScores[winnerTeam]) winnerTeam = homeTeam;
    } else {
      teamScores[awayTeam]
        ? (teamScores[awayTeam] += 3)
        : (teamScores[awayTeam] = 3);
      if (teamScores[awayTeam] > teamScores[winnerTeam]) winnerTeam = awayTeam;
    }
  }
  return winnerTeam;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
