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
    for (let j = 0; j < secondCompartment.length; j++) {
      if (firstCompartment.includes(secondCompartment[j])) {
        commonLetters.push(secondCompartment[j])
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

const calculateBadgeScore = (backpacks) => {
  let badgeScore = 0
  let badgeList = []
  for (let i = 0; i < backpacks.length; i += 3) {
    let first = backpacks[i]
    let second = backpacks[i + 1]
    let third = backpacks[i + 2]
    for (let j = 0; j < first.length; j++) {
      if (second.includes(first[j]) && third.includes(first[j])) {
        badgeList.push(first[j])
        break
      }
    }
  }
  for (const letter of badgeList) {
    badgeScore += letterValues[letter]
  }
  console.log(badgeScore)
}

calculatePriorityScore(textByLine)
calculateBadgeScore(textByLine)

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

/*
iterate through backpacks 3 at a time
  create 3 different packbacks 
  pick one and iterate through one of the backpacks and find the shared letter
  add letter to list of letters
iterate through list of letters
  add value of each letter to total
*/
