const fs = require('fs')
const text = fs.readFileSync('Inputs/input2.txt').toString('utf-8')
const textByLine = text.split('\n')

const findScore = (strategy) => {
  let totalScore = 0
  for (let i = 0; i < strategy.length; i++) {}
}

/*
iterate through array
for each iteration:
  get enemy's choice
  get your choice
  calc points for choice and add to current round points
  compare choices
  calc result for yourself and add result points to current rounds points
  add current round points to total score
*/
