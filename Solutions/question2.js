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

findScore(textByLine)

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
