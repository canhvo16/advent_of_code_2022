const fs = require('fs')
const text = fs.readFileSync('Inputs/input2.txt').toString('utf-8')
const textByLine = text.split('\n')

const findScore = (strategy) => {
  const optionValue = {
    X: 1,
    Y: 2,
    Z: 3
  }
  let totalScore = 0
  for (let i = 0; i < strategy.length; i++) {
    let opponent = strategy[i][0]
    let me = strategy[i][2]
    if (optionValue[me]) {
      totalScore += optionValue[me]
    }
    if (me == 'X' && opponent == 'C') {
      totalScore += 6
    } else if (me == 'Y' && opponent == 'A') {
      totalScore += 6
    } else if (me == 'Z' && opponent == 'B') {
      totalScore += 6
    } else if (me == 'X' && opponent == 'A') {
      totalScore += 3
    } else if (me == 'Y' && opponent == 'B') {
      totalScore += 3
    } else if (me == 'Z' && opponent == 'C') {
      totalScore += 3
    }
  }
  console.log(totalScore)
}

const findScore2 = (strategy) => {
  const oppA = {
    win: 2,
    tie: 1,
    loss: 3
  }
  const oppB = {
    win: 3,
    tie: 2,
    loss: 1
  }
  const oppC = {
    win: 1,
    tie: 3,
    loss: 2
  }
  const result = {
    X: 0,
    Y: 3,
    Z: 6
  }
  let totalScore = 0
  for (let i = 0; i < strategy.length; i++) {
    if (strategy[i] !== '') {
      let opp = strategy[i][0]
      let strat = strategy[i][2]
      totalScore += result[strat]
      let outcome
      if (strat == 'X') {
        outcome = 'loss'
      } else if (strat == 'Y') {
        outcome = 'tie'
      } else if (strat == 'Z') {
        outcome = 'win'
      }
      if (opp == 'A') {
        totalScore += oppA[outcome]
      } else if (opp == 'B') {
        totalScore += oppB[outcome]
      } else if (opp == 'C') {
        totalScore += oppC[outcome]
      }
    }
  }
  console.log(totalScore)
}

findScore(textByLine)
findScore2(textByLine)

/*
iterate through array
for each iteration:
  get enemy's choice
  get your choice
  calc points for choice and add to current round points
  compare choices
  A = Rock = X
  B = Paper = Y
  C = Scissors = Z
    for wins:
      X & C
      Y & A
      Z & B
    for losses:
      X & B
      Y & C
      Z & A
    for ties:
      X & A
      Y & B
      Z & C
  calc result for yourself and add result points to current rounds points
  add current round points to total score
*/

/*
first column is opp choice
second column is result
  hashmap of results and points 
iterate through array
  get opp choice
  get result
  add result points to total score
  calc needed choice
  for A:
    ''win'' = 2
    ''tie'' = 1
    ''loss'' = 3
  for B:
    ''win'' = 3
    ''tie'' = 2
    ''loss'' = 1
  for C:
    ''win'' = 1
    ''tie'' = 3
    ''loss'' = 2
  for result:
    X = 0,
    Y = 3,
    z = 6
  add choice points to total score
return total points
*/
