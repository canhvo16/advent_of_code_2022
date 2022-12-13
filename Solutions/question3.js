const fs = require('fs')
const text = fs.readFileSync('Inputs/input3.txt').toString('utf-8')
const textByLine = text.split('\n')

const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let letterValues = {}

for (let i = 0; i < lowerAlphabet.length; i++) {
  letterValues[lowerAlphabet.charAt(i)] = i + 1
}

for (let i = 0; i < upperAlphabet.length; i++) {
  letterValues[upperAlphabet.charAt(i)] = i + 27
}

const calculatePriorityScore = (backpacks) => {
  let priorityScore = 0
  let commonLetters = []
  for (let i = 0; i < backpacks.length; i++) {
    let half = backpacks[i].length / 2
    let firstCompartment = backpacks[i].slice(0, half)
    let secondCompartment = backpacks[i].slice(half, backpacks[i].length)
    for (let i = 0; i < secondCompartment.length; i++) {
      if (firstCompartment.includes(secondCompartment[i])) {
        commonLetters.push(secondCompartment[i])
        break
      }
    }
  }
  for (const letter of commonLetters) {
    if (letterValues[letter]) {
      priorityScore += letterValues[letter]
    }
  }
  console.log(priorityScore)
}

calculatePriorityScore(textByLine)

/*
need hashmap of alphabet letters and priority score
iterate through list of backpacks
  grab first half of string
  grab second half of string
  compare to see if they share the same character
  create list of like characters
    get value of each character and add to priority score
return score
 */
